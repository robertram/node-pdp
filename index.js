const express = require("express");
const app = express();
const sampleResult = require("./sampleResult.json");
const emptySampleResult = require("./emptySampleResult.json");

app.get("/", function (req, res) {
  res.json(sampleResult);
  //res.json(emptySampleResult);
});

app.listen(4000, function (req, res) {
  console.log("Server is running at port 4000");
});
