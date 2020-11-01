const router = require("express").Router();
const CircuitBreaker = require("opossum");

router.get("/", (req, res) => {
  res.json({ hello: "hello" });
});

function asyncFunctionThatCouldFail(req) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 3500);
  });
}

const options = {
  timeout: 3000, // If our function takes longer than 3 seconds, trigger a failure
  errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
  resetTimeout: 30000, // After 30 seconds, try again.
};

const breaker = new CircuitBreaker(asyncFunctionThatCouldFail, options);

router.get("/circuit-example", (req, res) => {
  breaker.fallback(() => res.json({ error: "unavailable" }));
  breaker.fire(req);
});

module.exports = router;
