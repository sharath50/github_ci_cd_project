const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(`method:${req.method} url:${req.url}>`);
  res.status(200).json({
    message: "home page",
  });
});

module.exports = app;
