const loginForm = document.querySelector("#login-form");
var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { getUserToken } = require("../auth");
const { User } = require("../../models");
const { asyncHandler, handleValidationErrors } = require("../utils");

loginForm.addEventListener("click", async (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const email = formData.get("email");
  const password = formData.get("password");
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user || !user.validatePassword(password)) {
    const err = new Error("Login Failed");
    err.statue = 401;
    err.title = "Login Failed";
    err.errors = ["The provided credentials were invalid."];
    return next(err);
  }
});
module.exports = router;
