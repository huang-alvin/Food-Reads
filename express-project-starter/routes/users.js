var express = require("express");
var router = express.Router();
const { getUserToken };

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// post '/token' this to generate a token for users when they login
module.exports = router;
