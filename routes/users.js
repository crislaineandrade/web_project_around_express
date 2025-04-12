const router = require('express').Router();

const fs = require('fs');

const path = require('path');

router.get('/', (req, res) => {
  const filepath = path.join(__dirname, '../data/users.json');
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Erro ao ler arquivo' });
    }
    try {
      const users = JSON.parse(data);
      return res.send(users);
    } catch (error) {
      return res.status(500).send({ error: 'Erro ao processar JSON' });
    }
  });
});
router.get('/:id', (req, res) => {
  const filepath = path.join(__dirname, '../data/users.json');
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Erro ao ler arquivo' });
    }
    try {
      const users = JSON.parse(data);
      const user = users.find((userId) => userId._id === req.params.id);
      if (!user) {
        return res.status(404).send({ message: 'ID do usuário não encontrado' });
      }
      return res.send(user);
    } catch (error) {
      return res.status(500).send({ message: 'Erro ao processar JSON' });
    }
  });
});
module.exports = router;
