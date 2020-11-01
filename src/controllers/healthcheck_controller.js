const router = require("express").Router();

router.get("/", (req, res) => {
  // Check database
  // Check any other service
  res.json({ status: "ok" });
});

module.exports = router;
