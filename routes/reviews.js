const express = require("express");
const router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const { Review } = require("../db/models");

// User's comments & reviews get handled here
router.post(
  "/",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { rating, bookId } = req.body;
    const { userId } = req.session.auth;

    // there is no err handling on this. Ideally, it should handle the event
    // where this book is no longer in the database.

    // currently, User does not have the ability to update review.

    //With err handling.
    // 1. Try Build, if err do something
    // 2. if successful, notify user w/ alert or animation
    await Review.create({ bookId, userId, rating });
  })
);
module.exports = router;
