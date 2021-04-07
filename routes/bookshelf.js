var express = require('express');
var router = express.Router();
const { User, Bookshelf, Book, Review, Shelf } = require("../db/models");
const { asyncHandler } = require("../utils");
const { sessionCheck } = require('../auth')

router.get('/', async function(req, res, next) {

  const userID = res.locals.user.id;
  const user = await User.findByPk(userID);
  // console.log(user);
  const bookshelf = await Bookshelf.findAll({ where: { userId: userID }});
  console.log(bookshelf[0].status)
  let bookshelfId =[];
  for(let i = 0; i < bookshelf.length; i++) {
    bookshelfId.push(bookshelf[i].id);
  }

  console.log(bookshelfId)
  const shelves = [];
  // for(let i = 0; i < bookshelfId.length; i++) {
  //   let id = bookshelfId[i]
  //   console.log(id)
  //   shelves.push(await Shelf.findAll())
  // }

  const shelf = await Shelf.findAll()
  console.log(shelf)
  // const shelves = await Shelf.findAll({where: { bookShelfId: }})
    // const rating =
    // const book =
    res.render('bookshelf', {bookshelf});
});


  module.exports = router;
