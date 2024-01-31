const express = require('express');
const userRouter = express.Router();
const UserController = require('../../controller/user/UserController');


userRouter.route('/registration-info').post(UserController.registration);
userRouter.route('/registration-info-verify').post(UserController.registrationVerify);
userRouter.route('/register-user-info').put(UserController.regCompleteInfo);

userRouter.route('/login').post(UserController.registrationVerify);



module .exports = userRouter
