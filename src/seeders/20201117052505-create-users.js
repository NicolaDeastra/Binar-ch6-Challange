'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'User',
      [
        {
          id: '592eddb5-a1e4-4b24-9561-63232b7f99cc',
          name: 'Kucing oren',
          username: 'KittyHellow',
          email: 'hello@gmail.com',
          age: 14,
        },
        {
          id: 'a3beaa19-680b-4f74-8594-29dc9e4accc4',
          name: 'Deastra',
          username: 'DarkKnight',
          email: 'nicola77@gmail.com',
          age: 12,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};
