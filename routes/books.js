const express = require("express");
const router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const {
  Book,
  Review,
  Bookshelf,
  Shelf,
  Comment,
  User,
} = require("../db/models");
const { Op } = require("sequelize");
const comment = require("../db/models/comment");
const moment = require("moment");

//------BONUS--------------
// comment section
// allow user to update/delete review

//after user adds the book to their shelf
// give them some kind of confirmation like an alert
router.get(
  "/",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { id } = res.locals.user;
    const latestBooks = await Book.findAll({
      order: [["id", "DESC"]],
    });

    const bookshelves = await Bookshelf.findAll({
      where: { userId: id },
      include: Book, // each bookshelf in this array will include ITS OWN ASSOCIATED books
      order: [["id", "ASC"]],
    });

    // res.json(bookshelves);
    res.render("books", { bookshelves, latestBooks });
  })
);

router.get(
  "/:id(\\d+)",
  sessionCheck,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const { id } = req.params;

    const book = await Book.findOne({ where: { id } });
    const ratings = await Review.findAll({ where: { bookId: id } }).map(
      (rating) => rating.rating
    );

    let avgRating = 0;

    if (ratings.length) {
      avgRating =
        ratings.reduce((accum, currRating) => accum + currRating) /
        ratings.length.toFixed(1);
    }
    const userRating = await Review.findOne({
      where: { [Op.and]: [{ userId }, { bookId: id }] },
    });
    const userShelvesObj = await Bookshelf.findAll({
      where: {
        userId,
      },
    });
    // Storing the user shelf id's in an array to use for the query below
    const userShelves = userShelvesObj.map((shelf) => shelf.id);
    // Querying to see if the book exists in any one of the user's bookshelf
    const hasBook = await Shelf.findOne({
      where: {
        [Op.and]: [{ bookId: id }, { [Op.or]: [{ bookshelfId: userShelves }] }],
      },
    });
    let shelf;
    if (hasBook) {
      shelf = await Bookshelf.findOne({
        where: { id: hasBook.bookshelfId },
      });
    }

    // Find associated comment and its user name
    const commentObj = await Comment.findAll({
      where: { bookId: id },
      include: User,
      order: [["id", "DESC"]],
    });
    // res.json(commentObj[0].User.name);
    // const { userId } = req.session.auth;
    const { name } = await User.findOne({ where: { id: userId } });
    res.render("book.pug", {
      name,
      book,
      ratings,
      avgRating,
      userRating,
      hasBook,
      userRating,
      shelf,
      userShelvesObj,
      commentObj,
      moment: moment,
    });
  })
);

module.exports = router;
