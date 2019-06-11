const config = require("../../../server.config");
const logger = require("menora.libs.logger");
const fetch = require('menora.libs.ssl.fetch');
const { isEmptyObject } = require('menora.libs.common/validations');

// async function loginAuthenticationRepo(req) {
// 	try {
// 		logger.info(`${__filename} try create token `, req);
// 		const bodyRequest = {
// 			username: config.ADMIN_TOKEN_USERNAME,
// 			password: config.ADMIN_TOKEN_PASSWORD,
// 			role: config.ADMIN_TOKEN_ROLE
// 		}
// 		const response = await fetchClient.fetch(
// 			config.TOKEN_URL,
// 			config.API_BASIC_HTTP_USER_NAME,
// 			config.API_BASIC_HTTP_PASSWORD,
// 			null,
// 			'POST',
// 			bodyRequest,
// 			null,
// 		);
// 		//  unknown errors - can happen when service try return error and response status 200 only
// 		if (!response || response.err) {
// 			const msg = response ? response.err : 'response not exists';
// 			throw new Error(msg);
// 		}
// 		// on success
// 		logger.info(`${__filename} success create token `, req);
// 		return response.data;
// 	}
// 	catch (err) {
// 		logger.error(`${__filename} - ERROR on loginAuthenticationRepo: ${err.message}`, req);
// 		throw err;
// 	}

// }

async function loginAuthenticationRepo(req) {
	try {
		const jsonRequest = {
			username: config.API_USER_NAME_FOR_TOKEN,
			password: config.API_PASSWORD_FOR_TOKEN,
			// requestId,
			// processName: processId,
			// agentNumber,
			// channelType: 'agent'
		};

		const token = await fetch.fetch(
			config.TOKEN_URL,
			config.API_BASIC_HTTP_USER_NAME,
			config.API_BASIC_HTTP_PASSWORD,
			null,
			null,
			jsonRequest,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': config.TOKEN_AUTHORIZATION,
				}
			}
		);

		if (
			isEmptyObject(token) ||
			!token ||
			!token.hasOwnProperty('data')
		) {
			throw new Error('can not create token');
		}

		logger.info('sendInsuRequest.repository createNewToken:', token.data);
		return token.data;
	} catch (e) {
		logger.error(`sendInsuRequest.repository createNewToken ${e.message}`, {});
		throw new Error(`[createNewToken] - ${e.message} `);
	}
}

module.exports = {
	loginAuthenticationRepo
};