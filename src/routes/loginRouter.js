const express = require('express');
const loginRouter = express.Router();
const cryptLoginData = require('../functions/loginFunctions');
const validateLogin = require('../middlewares/validateLogin');

loginRouter.post('/', validateLogin, cryptLoginData);

module.exports = loginRouter;