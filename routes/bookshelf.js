var express = require("express");
var router = express.Router();
const { User, Bookshelf, Book, Review, Shelf } = require("../db/models");
const { asyncHandler } = require("../utils");
const { sessionCheck } = require("../auth");
const moment = require("moment");

// router.use(moment)

router.get(
  "/delete/:id(\\d+)",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const userID = res.locals.user.id;

    const bookshelf = await Bookshelf.findAll({ where: { userId: userID } });

    let shelf;
    for (let i = 0; i < bookshelf.length; i++) {
      let bookshelfID = bookshelf[i].id;
      shelf = await Shelf.findOne({
        where: { bookshelfId: bookshelfID, bookId: id },
      });
    }

    const book = await Book.findByPk(id, {
      include: [
        { model: Review, required: false, where: { userId: userID } },
        { model: Bookshelf, required: false, where: { userId: userID } },
      ],
    });

    res.render("book-delete", { book, moment: moment });
  })
);

router.get(
  "/delete/shelf/:id(\\d+)",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const userID = res.locals.user.id;

    const bookshelf = await Bookshelf.findByPk(id);

    res.render("shelf-delete", { bookshelf, moment: moment });
  })
);

router.get(
  "/:id(\\d+)",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const userID = res.locals.user.id;

    const bookshelf = await Bookshelf.findAll({ where: { userId: userID } });

    const bookIds = [];
    let shelves = await Shelf.findAll({ where: { bookshelfId: id } });
    for (let j = 0; j < shelves.length; j++) {
      bookIds.push(shelves[j].bookId);
    }

    const books = [];
    for (let i = 0; i < bookIds.length; i++) {
      books.push(
        await Book.findByPk(bookIds[i], {
          include: [
            { model: Review, required: false, where: { userId: userID } },
            { model: Bookshelf, required: false, where: { userId: userID } },
          ],
        })
      );
    }

    res.render("shelf", { bookshelf, books, moment: moment });
  })
);

router.get(
  "/shelves",
  sessionCheck,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userID = res.locals.user.id;

    const bookshelf = await Bookshelf.findAll({ where: { userId: userID } });

    res.render("shelves", { bookshelf, moment: moment });
  })
);

router.get("/", async function (req, res, next) {
  const userID = res.locals.user.id;
  const user = await User.findByPk(userID);

  const bookshelf = await Bookshelf.findAll({ where: { userId: userID } });

  let bookshelfId = [];
  for (let i = 0; i < bookshelf.length; i++) {
    bookshelfId.push(bookshelf[i].id);
  }

  const bookIds = [];

  for (let i = 0; i < bookshelfId.length; i++) {
    let id = bookshelfId[i];
    let shelves = await Shelf.findAll({ where: { bookshelfId: id } });
    for (let j = 0; j < shelves.length; j++) {
      bookIds.push(shelves[j].bookId);
    }
  }
  const books = [];
  for (let i = 0; i < bookIds.length; i++) {
    books.push(
      await Book.findByPk(bookIds[i], {
        include: [
          { model: Review, required: false, where: { userId: userID } },
          { model: Bookshelf, required: false, where: { userId: userID } },
        ],
      })
    );
  }
  // res.locals.moment=require('moment')
  res.render("bookshelf", { bookshelf, books, moment: moment });
});

router.post(
  "/delete/:id(\\d+)",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const userID = res.locals.user.id;

    const bookshelf = await Bookshelf.findAll({ where: { userId: userID } });

    let shelf;
    for (let i = 0; i < bookshelf.length; i++) {
      let bookshelfID = bookshelf[i].id;
      shelf = await Shelf.findOne({
        where: { bookshelfId: bookshelfID, bookId: id },
      });
      if (shelf) break;
    }

    await shelf.destroy();

    res.redirect("/bookshelf");
  })
);

router.post(
  "/delete/shelf/:id(\\d+)",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    const userID = res.locals.user.id;

    const bookshelf = await Bookshelf.findByPk(id);

    const shelves = await Shelf.findAll({ where: { bookshelfId: id } });
    for (let i = 0; i < shelves.length; i++) {
      await shelves[i].destroy();
    }
    await bookshelf.destroy();

    res.redirect("/bookshelf");
  })
);

router.post(
  "/shelves/create/",
  sessionCheck,
  asyncHandler(async (req, res, next) => {
    const { shelfName } = req.body;
    const userID = res.locals.user.id;

    const newBookshelf = await Bookshelf.build({
      userId: userID,
      status: shelfName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await newBookshelf.save();

    res.redirect("/bookshelf");
  })
);

module.exports = router;
