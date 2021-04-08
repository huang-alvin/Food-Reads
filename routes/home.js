var express = require("express");
var router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const { Bookshelf, Shelf, Book } = require("../db/models");

/* GET home page. */
router.get(
  "/",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { id } = res.locals.user;
    const latestBooks = await Book.findAll({
      limit: 9,
      order: [["id", "ASC"]],
    });

    const bookshelf = await Bookshelf.findAll({
      where: { userId: id },
      include: Book, // each bookshelf in this array will include ITS OWN ASSOCIATED books
      order: [["id", "ASC"]],
    });

    // res.json(bookshelf);
    res.render("home(new)", { bookshelf, latestBooks });
  })
);

module.exports = router;
