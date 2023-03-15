const BAD_REQUEST = 400;

function validateEmail(req, res, next) {
  const { email } = req.body;
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const validEmail = emailRegex.test(email);
  if (!email) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!validEmail) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
}

function validatePassword(req, res, next) {
  const { password } = req.body;
  if (!password) {
    return res.status(BAD_REQUEST).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
}

module.exports = {
  validateEmail,
  validatePassword,
};