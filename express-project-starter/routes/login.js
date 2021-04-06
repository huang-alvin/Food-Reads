const loginForm = document.querySelector("#login-form");
var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { getUserToken } = require("../auth");
const { User } = require("../../models");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { check, validationResult } = require("express-validator");
const { loginUser } = require("../auth");

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

    // if no validationErr
    // find the user
    // user check
    if (validationErrors.isEmpty()) {
      const user = await User.findOne({
        where: {
          email,
        },
      });
    }
    if (user) {
      validPassword = await bcrypt.compare(
        password,
        user.hashedPassword.toString()
      );
    }
    if (validPassword) {
      loginUser(req, res, user);
      res.redirect("/");
    }
    // if (!user || !user.validatePassword(password)) {
    //   // bad credentials
    //   const err = new Error("Login Failed");
    //   err.statue = 401;
    //   err.title = "Login Failed";
    //   err.errors = ["The provided credentials were invalid."];
    // }
    else {
      // validation criteria failed
      errors = validationErrors.array().map((err) => err.msg);
      if (!user || !user.validatePassword(password)) {
        errors.push("Login Failed, the provided credentials were invalid.");
      }
      res.render("login", {
        errors,
        // maybe csurf
      });
    }
  })
);
module.exports = router;
