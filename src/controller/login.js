const db = require('../models');

const loginController = {
  getLogin: async (req, res) => {
    res.render('login');
  },

  postLogin: async (req, res) => {
    const { username, password } = req.body;

    try {
      const admin = await db.Admin.findOne({ where: { username } });

      if (!admin) {
        res.send({ error: 'login invalid' });
      }

      const passwordMatch = admin.password === password;

      if (!passwordMatch) {
        res.send({ error: 'login invalid' });
      }

      res.redirect('/home');
    } catch (err) {
      res.status(400).send(err);
    }
  },
};

module.exports = loginController;
