var express = require("express");
var router = express.Router();
const { sessionCheck } = require("../auth");

/* GET home page. */
router.get("/", sessionCheck, (req, res, next) => {
  res.render("home", { title: "a/A Express Skeleton Home" });
});

module.exports = router;
