'use strict';

const { Book, User } = require('../models');

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
    const currentUsers = await User.findAll(
      { attributes: ['id'] }
    );

    const currentBooks = await Book.findAll(
      {
        attributes: ['id']
      }
    )

    const reviews = [];

    currentBooks.forEach(book => {
      const preventRepeat = [];

      for (let i = 0; i < 5; i++) {
        let randUserIdx = Math.floor(Math.random() * (currentUsers.length))
        while (preventRepeat.includes(randUserIdx)) {
          randUserIdx = Math.floor(Math.random() * (currentUsers.length))
        };
        preventRepeat.push(randUserIdx)
        const randUser = currentUsers[randUserIdx];
        const randRating = (3 + Math.floor(Math.random() * 3));

        const review = {
          userId: randUser.id,
          bookId: book.id,
          rating: randRating,
          createdAt: new Date(),
          updatedAt: new Date(),
        }

        reviews.push(review);
      }

    })

    return queryInterface.bulkInsert('Reviews', reviews
    // [
    //   {
    //     userId: 1,
    //     bookId: 1,
    //     rating: 4,
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
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
