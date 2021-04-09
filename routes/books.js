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

//------BONUS--------------
// comment section
// allow user to update/delete review

//after user adds the book to their shelf
// give them some kind of confirmation like an alert

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
        ratings.length;
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
    res.render("book.pug", {
      book,
      ratings,
      avgRating,
      userRating,
      hasBook,
      userRating,
      shelf,
      userShelvesObj,
      commentObj,
    });
  })
);

module.exports = router;
