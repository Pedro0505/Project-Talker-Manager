const express = require('express');
const bodyParser = require('body-parser');
const emailValidation = require('./middlewares/emailValidation');
const passwordValidation = require('./middlewares/passwordValidation');
const login = require('./controllers/login');
const talkerRoutes = require('./routes/talkerRoutes');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

app.post('/login', passwordValidation, emailValidation, login);
app.use('/talker', talkerRoutes);

app.listen(PORT, () => {
  console.log('Online');
});
