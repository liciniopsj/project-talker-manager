const BAD_REQUEST = 400;

module.exports = function validateLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email) {
    return res.status(BAD_REQUEST).json({ message: "O campo \"email\" é obrigatório" });
  };
  if (!password) {
    return res.status(BAD_REQUEST).json({ message: "O campo \"password\" é obrigatório" });
  };
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  const validEmail = emailRegex.test(email);
  if (!validEmail) {
    return res.status(BAD_REQUEST).json({ message: "O \"email\" deve ter o formato \"email@email.com\"" });
  }
  if (password.length < 6) {
    return res.status(BAD_REQUEST).json({ message: "O \"password\" deve ter pelo menos 6 caracteres" });
  }
  next();


};