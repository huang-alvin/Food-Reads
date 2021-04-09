'use strict';

const { Book, User, Bookshelf } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const demoUser = await User.findOne({
      where: {
        email: "demo@gmail.com"
      }
    })

    const demoShelves = await Bookshelf.findAll({
      where: {
        userId: demoUser.id
      }
    })

    const books = await Book.findAll({
      attributes: ['id']
    })

    const shelves = [];

    demoShelves.forEach(bookshelf => {
      const randNumberofBooks = Math.floor(Math.random() * 3) + 3;

      for (let i = 0; i < randNumberofBooks; i++) {
        const book = books.pop();

        const oneBookOnShelf = {
          bookId: book.id,
          bookshelfId: bookshelf.id,
          createdAt: new Date(),
          updatedAt: new Date()
        };

        shelves.push(oneBookOnShelf);
      };
    });


    return queryInterface.bulkInsert('Shelves', shelves
    // [
    //   {
    //     bookId: 1,
    //     bookshelfId: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ]
    , {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Shelves', null, {});
  }
};
