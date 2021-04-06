var express = require('express');
var router = express.Router();
const { User, Bookshelf, Book, Review } = require("../db/models");
const { asyncHandler } = require("../utils");

router.get('/', function(req, res, next) {
    // const shelves =
    // const rating =
    // const book =
    res.render('bookshelf');
});


  module.exports = router;
