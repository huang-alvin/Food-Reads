var express = require("express");
var router = express.Router();
const { sessionCheck } = require("../auth");
const { Bookshelf } = require("../db/models");

/* GET home page. */
router.get("/", sessionCheck, (req, res, next) => {
  const { id } = res.locals.user;
  res.render("home(new)", { title: "a/A Express Skeleton Home" });
});

module.exports = router;
