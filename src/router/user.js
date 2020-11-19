const express = require('express')
const userController = require('../controller/user')

const router = express.Router()

router.get('/', userController.getUsers)

router.get('/add', userController.getAddUser)
router.post('/add', userController.postAddUser)

router.get('/update/:id', userController.getUpdateUser)
router.post('/update/:id', userController.postUpdateUser)

router.get('/delete/:id', userController.deleteUser)
router.get('/profile/:id', userController.getUser)

router.get('/addgame/:id', userController.getAddGame)
router.post('/addgame/:id', userController.postAddGame)

router.get('/deleteHistory/:id', userController.deleteHistory)

module.exports = router
