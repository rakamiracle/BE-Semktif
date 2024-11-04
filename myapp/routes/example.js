var express = require("express");
var router = express.Router();

/* GET users listing. */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
