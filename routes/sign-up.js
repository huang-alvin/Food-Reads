var express = require("express");
var router = express.Router();
const { check, validationResult } = require("express-validator");
const { User, Bookshelf } = require("../db/models");
const { asyncHandler } = require("../utils");
const bcrypt = require("bcryptjs");

const { loginUser } = require("../auth");

const userValidator = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a name"),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email")
    .isEmail()
    .withMessage("Please provide a valid email"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid password"),
];

router.get("/", function (req, res, next) {
  res.render("sign-up");
});

router.post(
  "/",
  userValidator,
  asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.build({
      name,
      email,
      hashedPassword,
    });

    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
      await user.save();
      loginUser(req, res, user);
      const currentlyReading = await Bookshelf.build({
        userId: user.id,
        status: "Currently Reading",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const wantToRead = await Bookshelf.build({
        userId: user.id,
        status: "Want to Read",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      const read = await Bookshelf.build({
        userId: user.id,
        status: "Read",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await currentlyReading.save();
      await wantToRead.save();
      await read.save();
      return req.session.save((err) => {
        if (err) next(err);
        else {
          return res.redirect("/home");
        }
      });
    } else {
      errors = validationErrors.array().map((err) => err.msg);
      res.render("sign-up", {
        user,
        errors,
        // maybe csurf
      });
    }
  })
);

module.exports = router;
