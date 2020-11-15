const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

router.get('/', userController.getUsers);

router.post('/', userController.postUser);

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
