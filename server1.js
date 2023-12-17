const express = require("express");
const app = express();

app.listen(5001, () => {
  console.log("Application is running on port 5001");
});

app.get("/", (req, res) => {
  return res.send("Response from Application 1");
});
