const express = require('express');

const app = express();
app.use('/users', require('./routes/users'));

app.use('/cards', require('./routes/cards'));

const { PORT = 3000 } = process.env;
app.use('/', (req, res) => {
  res.status(404).send({ message: 'A solicitação não foi encontrada' });
});
app.listen(PORT, () => {
});
