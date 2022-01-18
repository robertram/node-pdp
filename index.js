const express = require("express");
const app = express();
const sampleResult = require("./sampleResult.json");

app.get("/", function (req, res) {
  res.json(sampleResult);
});

app.listen(4000, function (req, res) {
  console.log("Server is running at port 4000");
});
