const compression = require('compression');
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//server config
const conf = require("./server.config");

//zipkin
const { Tracer } = require('zipkin');
const { BatchRecorder } = require('zipkin');
const { HttpLogger } = require('zipkin-transport-http');
const CLSContext = require('zipkin-context-cls');
//const tracer = createZipkinTracer();
const zipkinMiddleware = require('zipkin-instrumentation-express').expressMiddleware;
//next.js, express hooking
const dev = true; // process.env.NODE_ENV !== 'production'
//oauth 2 infrastructure
const { IsWhitelist, HasToken, HasRole } = require('menora.libs.oauth2');
const logger = require('menora.libs.logger');

//ui
const next = require("next");
// next configuration
const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();
// mongo client
const MongoClient = require("menora.libs.mongodb.handler");

const routes = async (server, logger) => {
    console.log("routes");
    server.route('/error').post((req, res) => {
        logger.error(JSON.stringify(req.body), req);
    });
    const bamuiApi = require("./server/api/bamui/bamui.route");
    server.use(conf.BASE_API_PATH, bamuiApi);

    const loginAuthenticationApi = require('./server/api/loginAuthentication/loginAuthentication.route');
    server.use(`${conf.BASE_API_PATH}/loginAuthentication`, HasToken(logger), loginAuthenticationApi);
    // server.use(conf.BASE_API_PATH, loginAuthenticationApi);

    server.get("*", (req, res) => {
        return handle(req, res);
    });
}

const bootstarp = async () => {
    logger.info("bootstarp", {});
    const server = express();
    server.use(favicon(path.join(__dirname, './client/static', 'favicon.ico')));
    // parse application/x-www-form-urlencoded
    server.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    server.use(bodyParser.json({ limit: '2mb' }));
    // register authentication provider
    // server.use(HasToken(logger));
    // register xss protection filter
    // server.use(IsWhitelist(logger, null));
    // HasRole
    // server.use(HasRole(['BAMUI']))
    //register other security protections
    server.use(helmet());
    //register gzip compression
    server.use(compression());
    //logger all requests - acecss log
    if (!dev) {
        server.use(expressWinston.logger({
            transports: [
                new (transports.DailyRotateFile)({
                    level: dev ? 'debug' : 'info',
                    timestamp: true,
                    filename: 'log-%DATE%.log',
                    datePattern: 'YYYY-MM-DD-HH',
                    zippedArchive: true,
                    maxSize: '200m',
                    maxFiles: '14d'
                })
            ],
            format: format.combine(
                format.colorize(),
                format.json()
            ),
            expressFormat: true,
        }));
        // set csrf middleware
        // server.use(csrfMid);
    }

    server.use(methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            var method = req.body._method
            delete req.body._method
            return method
        }
    }));

    //registered static files folders
    server.use(express.static('static'));
    //register health check middleware
    server.use(onHealthCheck);
    //register zipkin open tracing provider
    if (!dev) server.use(zipkinMiddleware({ tracer, serviceName: conf.SERVICE_NAME }));

    //register routes
    await routes(server, logger);
    //Express middleware in case of SYNC error in a web request
    server.use(function (err, req, res, next) {
        logger.error(`global middleware error, error: ${err}`, req);
        return next();
    });
    //start server
    server.listen(conf.PORT, (err) => {
        if (err) throw err
        logger.info(`${conf.SERVICE_NAME} ready on http://localhost:${conf.PORT}${conf.BASE_API_PATH}`, {});
    })
}

// initialize nextjs ssr
app.prepare().then(() => {
    bootstarp();
}).catch((ex) => {
    logger.error(`uncaughtException, reason: ${ex}`, {});
})



/*
this function is for microservice health check used by docker
*/
async function onHealthCheck(req, res, next) {

    if (req.originalUrl === '/health') {
        //  mognodb connect
        const mongoPromise = MongoClient.getConnection(conf.MONGODB_CONNECTION_STRING, { useNewUrlParser: true });

        Promise.all([mongoPromise])
            .then(() => res.json({ serviceName: conf.SERVICE_NAME, status: 'UP' }))
            .catch(() => res.json({ serviceName: conf.SERVICE_NAME, status: "DOWN" }))
    } else {
        next();
    }
}
/*
this function registers zipkin provider for open tracing spec
*/
function createZipkinTracer() {
    const ctxImpl = new CLSContext();
    const recorder = new BatchRecorder({
        logger: new HttpLogger({
            endpoint: conf.ZIPKIN_PATH
        })
    });
    return new Tracer({ ctxImpl, recorder });
}
/*
uncaught error from somewhere
*/
process.on('uncaughtException', function (error) {
    logger.error(`uncaughtException, error: ${error}`, {});
});
/*
unhandled promise rejection
*/
process.on('unhandledRejection', function (reason, p) {
    logger.error(`uncaughtException, reason: ${reason}, p: ${p}`, {});
});

//destroy of the process
process.on('SIGINT', () => {
    process.exit();
});