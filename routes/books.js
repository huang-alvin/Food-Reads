const express = require("express");
const router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const { Book, Review } = require("../db/models");

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

router.get(
  "/:id(\\d+)",
  sessionCheck,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const books = await Book.findOne({ where: { id } });
    const ratings = await Review.findAll({ where: { bookId: id } }).map(
      (rating) => rating.rating
    );
    let avgRating = 0;
    if (ratings.length) {
      avgRating =
        ratings.reduce((accum, currRating) => accum + currRating) /
        ratings.length;
    }

    // res.json([books, ratings]);
    res.render("book.pug", { books, ratings, avgRating });
  })
);

module.exports = router;
