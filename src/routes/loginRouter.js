const express = require('express');

const loginRouter = express.Router();
const cryptLoginData = require('../functions/loginFunctions');
const { validateEmail, validatePassword } = require('../middlewares/validateLogin');

loginRouter.post('/', validateEmail, validatePassword, cryptLoginData);

module.exports = loginRouter;
