const express = require("express");
const app = express();
app.listen(5002, () => {
  console.log("Application is running on port 5002");
});
app.get("/", (req, res) => {
  return res.send("Response from Application 2");
});
