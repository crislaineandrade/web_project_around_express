const router = require('express').Router();

const fs = require('fs');

const path = require('path');

router.get('/', (req, res) => {
  const filepath = path.join(__dirname, '../data/cards.json');
  fs.readFile(filepath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Erro interno do servidor' });
    }
    try {
      const users = JSON.parse(data);
      return res.send(users);
    } catch (error) {
      return res.status(500).send({ error: 'Erro ao processar dados' });
    }
  });
});
module.exports = router;
