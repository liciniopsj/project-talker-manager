const express = require('express');
const loginRouter = express.Router();
const cryptLoginData = require('../functions/loginFunctions');

loginRouter.post('/', cryptLoginData);

module.exports = loginRouter;