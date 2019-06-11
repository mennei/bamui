const { loginAuthenticationRepo } = require('./loginAuthentication.repository');
const logger = require('menora.libs.logger');


async function loginAuthenticationService(req, res) {
  try {
    var result = await loginAuthenticationRepo(req);
    logger.info('[loginAuthenticationService] create token for manager', req);
    return res.status(200).json({
      err: null,
      data: {
        token: result
      }

    });
  }
  catch (err) {
    logger.error(`[loginAuthenticationService] create token error: ${err.message}`, req);
    throw err;
  }
}

module.exports = {
  loginAuthenticationService
};