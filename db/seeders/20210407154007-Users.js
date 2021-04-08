'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');
const { fake } = require('faker');

//console.log(faker.name.firstName())


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

    const password = bcrypt.hashSync('Password1!', 10);


    const makeUsers = (num) => {
      let arr = [{
        name: 'Demo', email: 'demo@gmail.com', hashedPassword: '$2a$10$WmjuqsDYmRW14s0Ku3p8lu.POTq997W.5j7xIFJOGJFANwhVY1LBi',
        createdAt: new Date(),
        updatedAt: new Date()
      }]

      for (let i = 1; i < num; i++) {
        let firstName = faker.name.firstName();
        const singleUser = {
          name: firstName,
          email: `${firstName}@email.com`,
          hashedPassword: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
        arr.push(singleUser)
      }

      return arr;
    }

    const users = makeUsers(10);

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
