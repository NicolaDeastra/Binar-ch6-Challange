const express = require('express')
const userController = require('../controller/user')
const historyController = require('../controller/history')

const router = express.Router()

router.get('/', userController.getUsers)

router.get('/add', userController.getAddUser)
router.post('/add', userController.postAddUser)

router.get('/update/:id', userController.getUpdateUser)
router.post('/update/:id', userController.postUpdateUser)

router.get('/delete/:id', userController.deleteUser)
router.get('/profile/:id', userController.getUser)

router.get('/addgame/:id', historyController.getAddHistoryGame)
router.post('/addgame/:id', historyController.postAddHistoryGame)

router.get('/deleteHistory/:id', historyController.deleteHistory)

module.exports = router
