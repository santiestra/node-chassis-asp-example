const uuid = require("uuid");

const tracingMiddleware = (req, res, next) => {
  let tracingId;
  if (req.header("RequestId")) {
    tracingId = req.header("RequestId");
  } else {
    tracingId = uuid.v4();
  }

  // We leave a reference to the id, and also set it in the response headers
  // If we call another microservice, we need to send the id in the headers
  req.tracingId = tracingId;
  next();
};

module.exports = tracingMiddleware;
