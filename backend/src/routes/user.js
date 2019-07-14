const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const isAuth = require('../util/auth');
// ALL ROUTES OF USERS
// prefix: /users

router.get('/', isAuth, usersController.getAllUsers);

module.exports = router;