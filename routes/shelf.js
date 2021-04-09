const express = require("express");
const router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const { Shelf } = require("../db/models");

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { bookId, shelfId } = req.body;
    const { userId } = req.session.auth;

    await Shelf.create({ bookId, bookshelfId: shelfId });
  })
);

module.exports = router;
