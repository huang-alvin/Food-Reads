var express = require('express');
var router = express.Router();
const { User, Bookshelf, Book, Review, Shelf } = require("../db/models");
const { asyncHandler } = require("../utils");
const { sessionCheck } = require('../auth')

router.get('/delete/:id(\\d+)', sessionCheck, asyncHandler( async (req, res, next) => {
  const { id } = req.params;
  const userID = res.locals.user.id;

  const bookshelf = await Bookshelf.findAll({ where: { userId: userID }});

  let shelf
  for(let i = 0; i < bookshelf.length; i++) {
    let bookshelfID = bookshelf[i].id
    shelf = await Shelf.findOne({where: { bookshelfId: bookshelfID, bookId: id}})
  }

  const book = await Book.findByPk(id, { include: [
    { model:Review, required: false, where: { userId: userID } },
    { model:Bookshelf, required: false, where: { userId: userID }}
  ]})


  console.log(shelf)
  res.render('book-delete', { book })
}))

router.get( "/:id(\\d+)", sessionCheck, asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const userID = res.locals.user.id;

  const bookshelf = await Bookshelf.findAll({ where: { userId: userID }});

  const bookIds = [];
  let shelves = await Shelf.findAll({where: { bookshelfId: id}})
  for(let j = 0; j < shelves.length; j++){
    bookIds.push(shelves[j].bookId)
  }

  const books = [];
  for(let i = 0; i < bookIds.length; i++) {
    books.push(await Book.findByPk(bookIds[i], { include: [
      { model:Review, required: false, where: { userId: userID } },
      { model:Bookshelf, required: false, where: { userId: userID }}
    ]}))
  }

  res.render('shelf', { bookshelf, books })
}));



router.get('/', async function(req, res, next) {
  console.log('here')
  const userID = res.locals.user.id;
  const user = await User.findByPk(userID);

  const bookshelf = await Bookshelf.findAll({ where: { userId: userID }});

  let bookshelfId =[];
  for(let i = 0; i < bookshelf.length; i++) {
    bookshelfId.push(bookshelf[i].id);
  }

  const bookIds = [];

  for(let i = 0; i < bookshelfId.length; i++) {
    let id = bookshelfId[i]
    let shelves = await Shelf.findAll({where: { bookshelfId: id}})
    for(let j = 0; j < shelves.length; j++){
      bookIds.push(shelves[j].bookId)
    }
  }
  const books = [];
  for(let i = 0; i < bookIds.length; i++) {
    books.push(await Book.findByPk(bookIds[i], { include: [
      { model:Review, required: false, where: { userId: userID } },
      { model:Bookshelf, required: false, where: { userId: userID }}
    ]}))
  }

  res.render('bookshelf', {bookshelf, books});
});

router.post('/delete/:id(\\d+)', sessionCheck, asyncHandler( async (req, res, next) => {
  const { id } = req.params;
  const userID = res.locals.user.id;

  const bookshelf = await Bookshelf.findAll({ where: { userId: userID }});

  let shelf
  for(let i = 0; i < bookshelf.length; i++) {
    let bookshelfID = bookshelf[i].id
    shelf = await Shelf.findOne({where: { bookshelfId: bookshelfID, bookId: id}})
  }

  await shelf.destroy();

  res.redirect('/bookshelf')
}))


module.exports = router;
