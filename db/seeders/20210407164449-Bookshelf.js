'use strict';

// const {User} = require('../models')

// const helper = async () => {
//   const users = await User.findAll();

//   console.log(users);
// }

// helper();

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const bookshelves = []

    for (let i = 1; i<=10; i++){
      const startingThree = [
        {
          userId: i,
          status: 'Currently Reading',
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          userId: i,
          status: 'Want to Read',
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          userId: i,
          status: 'Read',
          createdAt: new Date(),
          updatedAt: new Date()
          },
      ];
      bookshelves.push(...startingThree);
    }

    return queryInterface.bulkInsert('Bookshelves', bookshelves, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Bookshelves', null, {});
  }
};
