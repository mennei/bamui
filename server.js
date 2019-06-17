const compression = require ('compression');
const express = require ('express');
const favicon = require ('serve-favicon');
const path = require ('path');
const helmet = require ('helmet');
const bodyParser = require ('body-parser');
const methodOverride = require ('method-override');
//server config
const conf = require ('./server.config'); /* const zipkinMiddleware = require ('zipkin-instrumentation-express')
  .expressMiddleware;
 */ //const tracer = createZipkinTracer();

//zipkin
/* const {Tracer} = require ('zipkin');
const {BatchRecorder} = require ('zipkin');
const {HttpLogger} = require ('zipkin-transport-http');
const CLSContext = require ('zipkin-context-cls'); //next.js, express hooking
 */ const dev = true; // process.env.NODE_ENV !== 'production'
//oauth 2 infrastructure
// const { IsWhitelist, HasToken, HasRole } = require('menora.libs.oauth2');
// // const logger = require('menora.libs.logger');

//ui
const next = require ('next');
// next configuration
const app = next ({dev, dir: './client'});
const handle = app.getRequestHandler ();
// mongo client
const MongoClient = require ('mongodb').MongoClient;

const routes = async (server, logger) => {
  console.log ('routes');
  server.route ('/error').post ((req, res) => {
    console.log (JSON.stringify (req.body), req);
  });
  const bamuiApi = require ('./server/api/bamui/bamui.route');
  server.use (conf.BASE_API_PATH, bamuiApi);

  const loginAuthenticationApi = require ('./server/api/loginAuthentication/loginAuthentication.route');
  server.use (
    `${conf.BASE_API_PATH}/loginAuthentication`,
    // HasToken (logger),
    loginAuthenticationApi
  );
  // server.use(conf.BASE_API_PATH, loginAuthenticationApi);

  server.get ('*', (req, res) => {
    return handle (req, res);
  });
};

const bootstarp = async () => {
  console.log ('bootstarp', {});
  const server = express ();
  server.use (
    favicon (path.join (__dirname, './client/static', 'favicon.ico'))
  );
  // parse application/x-www-form-urlencoded
  server.use (bodyParser.urlencoded ({extended: false}));
  // parse application/json
  server.use (bodyParser.json ({limit: '2mb'}));
  // register authentication provider
  // server.use(HasToken(logger));
  // register xss protection filter
  // server.use(IsWhitelist(logger, null));
  // HasRole
  // server.use(HasRole(['BAMUI']))
  //register other security protections
  server.use (helmet ());
  //register gzip compression
  server.use (compression ());
  //logger all requests - acecss log
  if (!dev) {
    server.use (
      expressWinston.logger ({
        transports: [
          new transports.DailyRotateFile ({
            level: dev ? 'debug' : 'info',
            timestamp: true,
            filename: 'log-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '200m',
            maxFiles: '14d',
          }),
        ],
        format: format.combine (format.colorize (), format.json ()),
        expressFormat: true,
      })
    );
    // set csrf middleware
    // server.use(csrfMid);
  }

  server.use (
    methodOverride (function (req, res) {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
      }
    })
  );

  //registered static files folders
  server.use (express.static ('static'));
  //register health check middleware
  server.use (onHealthCheck);
  //register zipkin open tracing provider
  if (dev)
    // server.use (zipkinMiddleware ({tracer, serviceName: conf.SERVICE_NAME}));

    //register routes
    await routes (server);
  //Express middleware in case of SYNC error in a web request
  server.use (function (err, req, res, next) {
    console.log (`global middleware error, error: ${err}`, req);
    return next ();
  });
  //start server
  server.listen (conf.PORT, err => {
    if (err) throw err;
    console.log (
      `${conf.SERVICE_NAME} ready on http://localhost:${conf.PORT}${conf.BASE_API_PATH}`,
      {}
    );
  });
};

// initialize nextjs ssr
app
  .prepare ()
  .then (() => {
    bootstarp ();
  })
  .catch (ex => {
    console.log (`uncaughtException, reason: ${ex}`, {});
  });

/*
this function is for microservice health check used by docker
*/
async function onHealthCheck (req, res, next) {
  if (req.originalUrl === '/health') {
    const dbName = conf.MONGODB_NAME;
    //  mognodb connect
    const mongoPromise = MongoClient.connect (
      conf.MONGODB_CONNECTION_STRING,
      function (err, client) {
        console.log ('Connected successfully to server');

        const db = client.db (dbName);

        client.close ();
      }
    );

    Promise.all ([mongoPromise])
      .then (() => res.json ({serviceName: conf.SERVICE_NAME, status: 'UP'}))
      .catch (() =>
        res.json ({serviceName: conf.SERVICE_NAME, status: 'DOWN'})
      );
  } else {
    next ();
  }
} /*
uncaught error from somewhere
*/
/*
this function registers zipkin provider for open tracing spec
*/
/* function createZipkinTracer () {
  const ctxImpl = new CLSContext ();
  const recorder = new BatchRecorder ({
    logger: new HttpLogger ({
      endpoint: conf.ZIPKIN_PATH,
    }),
  });
  return new Tracer ({ctxImpl, recorder});
}
 */ process.on (
  'uncaughtException',
  function (error) {
    console.log (`uncaughtException, error: ${error}`, {});
  }
);
/*
unhandled promise rejection
*/
process.on ('unhandledRejection', function (reason, p) {
  console.log (`uncaughtException, reason: ${reason}, p: ${p}`, {});
});

//destroy of the process
process.on ('SIGINT', () => {
  process.exit ();
});
