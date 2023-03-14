const express = require('express');
const { randomBytes } = require('crypto');
const loginRouter = express.Router();

loginRouter.post('/', (req, res) => {
  // const { email, password } = req.body;
  const token = randomBytes(12).toString('base64');
  return res.status(200).json({ token });
});

module.exports = loginRouter;