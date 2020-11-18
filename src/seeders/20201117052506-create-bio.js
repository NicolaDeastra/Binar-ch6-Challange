'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Bio',
      [
        {
          id: 'f818859d-5a9b-47da-9611-b2a918e4090e',
          address: 'Compton California',
          phoneNumber: 7886444,
          school: 'Compton highschool',
          steamLevel: 104,
          userId: '592eddb5-a1e4-4b24-9561-63232b7f99cc',
        },
        {
          id: '3d10dd16-d730-4412-9a04-14a421b61a49',
          address: 'NY usa',
          phoneNumber: 4445556,
          school: 'NeyYork highschool',
          steamLevel: 194,
          userId: 'a3beaa19-680b-4f74-8594-29dc9e4accc4',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bio', null, {});
  },
};
