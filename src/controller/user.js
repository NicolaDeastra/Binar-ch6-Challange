const db = require('../models');

const userController = {
  postUser: async (req, res) => {
    const { body } = req;

    const userBody = {
      ...body,
    };

    try {
      const user = await db.User.create(userBody);

      res.send(user).status(200);
    } catch (err) {
      res.send(err).status(400);
    }
  },

  // getAllUser = async
};

module.exports = userController;
