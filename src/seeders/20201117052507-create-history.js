'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Histories',
      [
        {
          id: 'f818859d-5a9b-47da-9611-b2a918e4090e',
          gameName: 'AOV',
          userId: '592eddb5-a1e4-4b24-9561-63232b7f99cc',
        },
        {
          id: 'b3eeedfd-17ca-489d-b165-c1183dda2694',
          gameName: 'Dota 2',
          userId: '592eddb5-a1e4-4b24-9561-63232b7f99cc',
        },
        {
          id: '3d10dd16-d730-4412-9a04-14a421b61a49',
          gameName: 'Mobile Legend',
          userId: 'a3beaa19-680b-4f74-8594-29dc9e4accc4',
        },
        {
          id: '6cdccb3e-c1d0-44a7-8fcb-ccf779910f0e',
          gameName: 'Genshin impact',
          userId: 'a3beaa19-680b-4f74-8594-29dc9e4accc4',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Histories', null, {});
  },
};
