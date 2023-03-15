const { randomBytes } = require('crypto');

const cryptLoginData = (_req, res) => {
  // const { email, password } = req.body;
  const token = randomBytes(12).toString('base64');
  return res.status(200).json({ token });
};

module.exports =  cryptLoginData;
