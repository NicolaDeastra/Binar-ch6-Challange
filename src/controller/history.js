const db = require('../models')

const historyController = {
  getAddHistoryGame: async (req, res) => {
    const { id } = req.params

    try {
      const user = await db.User.findOne({ where: { id } })

      res.render('addGame', { user })
    } catch (err) {
      res.status(400).send(err)
    }
  },

  postAddHistoryGame: async (req, res) => {
    const {
      body: { gameName },
      params: { id },
    } = req

    gameBody = {
      gameName,
      userId: id,
    }

    try {
      const game = await db.Histories.create(gameBody)

      res.redirect('/users')
    } catch (err) {
      res.status(400).send(err)
    }
  },

  deleteHistory: async (req, res) => {
    const {
      params: { id },
    } = req

    try {
      await db.Histories.destroy({ where: { id } })

      res.status(200).redirect('/home')
    } catch (err) {
      res.status(400).send(err)
    }
  },
}

module.exports = historyController
