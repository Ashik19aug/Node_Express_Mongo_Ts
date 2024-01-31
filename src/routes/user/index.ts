const express = require('express');
const usersRouter = express.Router();
const UserController = require('../../controller/user/UserController');

usersRouter
    .route('/user')
    .get(UserController.registration);
