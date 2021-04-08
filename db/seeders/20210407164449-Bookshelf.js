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
    return queryInterface.bulkInsert('Bookshelves', [
      {
      userId: 1,
      status: 'Want to Read',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 1,
      status: 'Currently Reading',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 1,
      status: 'Read',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 2,
      status: 'Want to Read',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 2,
      status: 'Currently Reading',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      userId: 2,
      status: 'Read',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        userId: 3,
        status: 'Want to Read',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        userId: 3,
        status: 'Currently Reading',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        userId: 3,
        status: 'Read',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          userId: 4,
          status: 'Want to Read',
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          userId: 4,
          status: 'Currently Reading',
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
          userId: 4,
          status: 'Read',
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
            userId: 5,
            status: 'Want to Read',
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            userId: 5,
            status: 'Currently Reading',
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            userId: 5,
            status: 'Read',
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
              userId: 6,
              status: 'Want to Read',
              createdAt: new Date(),
              updatedAt: new Date()
              },
              {
              userId: 6,
              status: 'Currently Reading',
              createdAt: new Date(),
              updatedAt: new Date()
              },
              {
              userId: 6,
              status: 'Read',
              createdAt: new Date(),
              updatedAt: new Date()
              },
              {
                userId: 7,
                status: 'Want to Read',
                createdAt: new Date(),
                updatedAt: new Date()
                },
                {
                userId: 7,
                status: 'Currently Reading',
                createdAt: new Date(),
                updatedAt: new Date()
                },
                {
                userId: 7,
                status: 'Read',
                createdAt: new Date(),
                updatedAt: new Date()
                },
                {
                  userId: 8,
                  status: 'Want to Read',
                  createdAt: new Date(),
                  updatedAt: new Date()
                  },
                  {
                  userId: 8,
                  status: 'Currently Reading',
                  createdAt: new Date(),
                  updatedAt: new Date()
                  },
                  {
                  userId: 8,
                  status: 'Read',
                  createdAt: new Date(),
                  updatedAt: new Date()
                  },
                  {
                    userId: 9,
                    status: 'Want to Read',
                    createdAt: new Date(),
                    updatedAt: new Date()
                    },
                    {
                    userId: 9,
                    status: 'Currently Reading',
                    createdAt: new Date(),
                    updatedAt: new Date()
                    },
                    {
                    userId: 9,
                    status: 'Read',
                    createdAt: new Date(),
                    updatedAt: new Date()
                    },
    ], {});
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
