const express = require("express");
const router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const { Comment } = require("../db/models");
const moment = require("moment");

router.post(
  "/",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { userId } = req.session.auth;
    const { comment, bookId } = req.body;

    const newComment = await Comment.create({ comment, bookId, userId });
    res.json({ success: "success", commentId: newComment.id });
  })
);

router.delete(
  "/:commentId(\\d+)",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { commentId } = req.params;

    try {
      let comment = await Comment.findByPk(commentId);
      await comment.destroy();

      res.json({ success: "success" });
    } catch (error) {
      res.json({ error: `${error}` });
    }
  })
);
module.exports = router;
