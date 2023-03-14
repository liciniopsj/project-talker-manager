const express = require('express');
const { talkerRouter, loginRouter } = require('./routes');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app
  .use('/talker', talkerRouter)
  .use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`Server Online on Port ${PORT}, All systems nominal`);
});
