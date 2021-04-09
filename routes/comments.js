const express = require("express");
const router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const { Comment } = require("../db/models");
const moment = require('moment');

router.post(
  "/",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;
    const { comment, bookId } = req.body;

    await Comment.create({ comment, bookId, userId });
  })
);
module.exports = router;
