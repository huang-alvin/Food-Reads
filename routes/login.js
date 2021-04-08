var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../db/models");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { check, validationResult } = require("express-validator");
const { loginUser } = require("../auth");
const { InsufficientStorage } = require("http-errors");

const loginValidator = [
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email")
    .isEmail()
    .withMessage("Please provide a valid email"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a valid password"),
];
router.get("/", (req, res) => {
  res.render("login");
});

router.post(
  "/",
  loginValidator,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const validationErrors = validationResult(req);

    let errors = [];
    if (validationErrors.isEmpty()) {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        validPassword = await bcrypt.compare(
          password,
          user.hashedPassword.toString()
        );
        if (validPassword) {
          loginUser(req, res, user);
          return req.session.save((err) => {
            if (err) next(err);
            else {
              return res.redirect("/home");
            }
          });
          // res.redirect("/home");
        }
      }
      errors.push("Login failed for the provided email address and password");
    } else {
      errors = validationErrors.array().map((err) => err.msg);
    }
    res.render("login", {
      errors,
      email,
      // maybe csurf
    });
  })
);

router.get('/demo', asyncHandler(async (req, res, next) => {
  //! Find Demo User in the Database
  const user = await User.findOne({
    where: {
      email: "demo@gmail.com"
    },
  });

  //! Log the Demo User in
  loginUser(req, res, user);


  // Save to session and redirect user to home page
  return req.session.save((err) => {
    if (err) next(err);
    else {
      return res.redirect("/home");
    }
  });


}));
module.exports = router;
