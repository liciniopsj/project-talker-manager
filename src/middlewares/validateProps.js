const UNAUTHORIZED = 401;
const BAD_REQUEST = 400;

function validateToken(req, res, next) {
  const { authorization } = req.headers;
  const nanTest = typeof authorization;

  if (!authorization) {
    return res
      .status(UNAUTHORIZED)
      .json({ message: 'Token não encontrado' });
  }
  
  if (authorization.length !== 16 || nanTest === 'number') {
    return res
      .status(UNAUTHORIZED)
      .json({ message: 'Token inválido' });
  }
  next();
}

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "name" é obrigatório' });
  } 
  if (name.length < 3) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
}

function validateAge(req, res, next) {
  const { age } = req.body;
  if (!age) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "age" é obrigatório' });
  }
  if (!Number.isInteger(age) || age < 18) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
  next();
}

function validateTalk(req, res, next) {
  const { talk } = req.body;
  const regexDate = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
  if (!talk) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "talk" é obrigatório' });
  }
  if (!talk.watchedAt) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!talk.watchedAt.match(regexDate)) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
}

function validateTalkRate(req, res, next) {
  const { talk } = req.body;
  if (talk.rate === undefined) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "rate" é obrigatório' });
  }
  if (!Number.isInteger(talk.rate) || talk.rate < 1 || talk.rate > 5) {
    return res
      .status(BAD_REQUEST)
      .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  next();
}

module.exports = {
  validateName,
  validateAge,
  validateTalk,
  validateToken,
  validateTalkRate,
};