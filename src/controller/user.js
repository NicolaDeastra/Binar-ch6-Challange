const db = require('../models');

const userController = {
  getUsers: async (req, res) => {
    try {
      const users = await db.User.findAll({});

      res.send(users).status(200);
    } catch (err) {
      res.send(err).status(400);
    }
  },

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

  updateUser: async (req, res) => {
    const {
      body,
      params: { id },
    } = req;

    const userBody = {
      ...body,
    };

    try {
      const user = await db.User.update(userBody, { where: { id } });

      res.send(user).status(200);
    } catch (err) {
      res.send(err).status(400);
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await db.User.destroy({ where: { id } });

      res.send({ success: 'Delete success' }).status(200);
    } catch (err) {
      res.send(err).status(400);
    }
  },

  // getAllUser = async
};

module.exports = userController;
