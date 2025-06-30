const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    users: ["sharath", "mohan", "karthik"],
  });
});

module.exports = router;
