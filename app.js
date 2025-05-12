const express = require('express');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/aroundb');

const {registerUser, authorizeUser} = require('./controllers/auth')

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '6810c851d42756591aa2f340',
  };
  next();
});
app.use('/users', require('./routes/users'));

app.use('/cards', require('./routes/cards'));

// app.use('/', require('./routes/auth'))
app.post('/signup', registerUser)

const { PORT = 3000 } = process.env;
app.use('/', (req, res) => {
  res.status(400).send({ message: 'Dados Inválidos' });
});
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`)
});
