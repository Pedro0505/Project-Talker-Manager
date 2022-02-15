const express = require('express');
const bodyParser = require('body-parser');
// const fs = require('fs/promises');
const emailValidation = require('./middlewares/emailValidation');
const passwordValidation = require('./middlewares/passwordValidation');
const login = require('./controllers/login');
const talkerRoutes = require('./routes/talkerRoutes');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
// const FILE_NAME = 'talker.json';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', passwordValidation, emailValidation, login);
app.use('/talker', talkerRoutes);

app.listen(PORT, () => {
  console.log('Online');
});
