const express = require("express");
const router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const { Book, Review, Bookshelf, Shelf } = require("../db/models");
const { Op } = require("sequelize");

// query the book object
// display book image and its info & review.
// add button to add to users bookshelf
// add button to add review
// allow user to update their review
//------BONUS--------------
// comment section
// allow user to update/delete review
// if user rating exist say update rating
// else add a rating!
// check if book is in bookshelf
// else give a form w/ post route

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
    const userShelves = await Bookshelf.findAll({
      where: {
        userId,
      },
    });
    // const hasBook = await Shelf.findOne({
    //   where: {
    //     [Op.and]: [{ bookId: id }, { [Op.or]: [{ bookshelfId: userShelves }] }],
    //   },
    // });
    res.json([userRating, userShelves]);
    // res.render("book.pug", { book, ratings, avgRating, userRating });
  })
);

module.exports = router;
