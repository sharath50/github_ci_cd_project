const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(`method:${req.method} url:${req.url}>`);
  res.status(200).json({
    message: "home page",
  });
});

app.use("/api/users", require("./src/routes/users"));

module.exports = app;
