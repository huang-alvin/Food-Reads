const express = require("express");
const router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const { Shelf } = require("../db/models");

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { bookId, shelfId } = req.body;

    await Shelf.create({ bookId, bookshelfId: shelfId });
  })
);

module.exports = router;
