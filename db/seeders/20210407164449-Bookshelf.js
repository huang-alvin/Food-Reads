'use strict';

const { User } = require('../models')

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
      const currentUsers = await User.findAll({
        attributes: ['id',],
      });

      const bookshelves = []

      currentUsers.forEach((user) => {
        let startingThree = [
          {
            userId: user.id,
            status: 'Currently Reading',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: user.id,
            status: 'Want to Read',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            userId: user.id,
            status: 'Read',
            createdAt: new Date(),
            updatedAt: new Date()
          },
        ];
        bookshelves.push(...startingThree);
      });

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
