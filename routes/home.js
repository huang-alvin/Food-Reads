var express = require("express");
var router = express.Router();
const { sessionCheck } = require("../auth");
const { Bookshelf, Book } = require("../db/models");

/* GET home page. */
router.get("/", sessionCheck, (req, res, next) => {
  const { id } = res.locals.user;
  const latestBooks = Book.findAll({
    limit: 9,
    order: ["createdAt", "DESC"],
  });
  const bookshelf = Bookshelf.findOne({ where: { userId: id } });
  const currentShelfCount = res.render("home(new)", {
    title: "a/A Express Skeleton Home",
  });
});

module.exports = router;
