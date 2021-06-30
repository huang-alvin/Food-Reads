const express = require("express");
const router = express.Router();
const { sessionCheck } = require("../auth");
const { asyncHandler } = require("../utils");
const { Book } = require("../db/models");
const { Op } = require("sequelize");

router.post(
  "/",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { searchInput, ajax } = req.body;

    const searchResult = await Book.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${searchInput}%` } },
          { author: { [Op.iLike]: `%${searchInput}%` } },
          { description: { [Op.iLike]: `%${searchInput}%` } },
        ],
      },
    });

    if (!ajax) {
      res.render("search", { searchResult });
    } else {
      // console.log(searchResult);
      res.json(searchResult);
    }
  })
);

module.exports = router;
