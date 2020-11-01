// const newrelic = require('newrelic')

const express = require("express");
const bodyParser = require("body-parser");
const pino = require("pino-http");
const pinoOptions = require("./config/loggerOptions");

const docsRouter = require("./docs/api-docs");
const apiV1Router = express.Router();
const helloRouter = require("./src/controllers/hello_controller");
const healthcheckRouter = require("./src/controllers/healthcheck_controller");
const tracingMiddleware = require("./src/middlewares/distributed_tracing_middleware");

const app = express();
const port = process.env.PORT || 3456;

// Versionado de APIs
apiV1Router.use("/hello", helloRouter);
apiV1Router.use("/healthcheck", healthcheckRouter);

const pinoLogger = pino(pinoOptions);

app.use(pinoLogger);
app.use(tracingMiddleware);
app.use(bodyParser.json());

app.use(docsRouter);
app.use("/api/v1", apiV1Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Export app for testing
module.exports = app;
