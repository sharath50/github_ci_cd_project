const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    users: ["sharath", "mohan", "karthik"],
  });
});

router.get("/:id", (req, res) => {
  const users = ["sharath", "mohan", "karthik"];
  res.status(200).json({
    user: users[req.params.id],
  });
});

module.exports = router;
