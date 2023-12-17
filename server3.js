const express = require("express");
const app = express();
app.listen(5003, () => {
  console.log("Application is running on port 5003");
});
app.get("/", (req, res) => {
  return res.send("Response from Application 3");
});
