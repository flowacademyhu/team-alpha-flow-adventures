const npcsControllers = require('./controllers/npcs');

const express = require('express');
const router = express.Router();
const game = require('../bin/game');
const movement = require('../app/controllers/actions/movement');
const talk = require('../app/controllers/actions/talk');
let gameObject;

router.get('/npcs', npcsControllers.index);

router.get('/npcs/new', npcsControllers.new);

router.get('/npcs/:id', npcsControllers.show);

router.post('/npcs', npcsControllers.create);

router.get('/npcs/:id/edit', npcsControllers.edit);

router.put('/npcs/:id', npcsControllers.update);

router.delete('/npcs/:id', npcsControllers.delete);

router.get('/npcs/count', npcsControllers.count);

router.post('/games', (request, response) => {
  gameObject = game();
  response.json(gameObject);
});

router.put('/games/movements/north', (request, response) => {
  movement('north', gameObject);
  response.json(gameObject);
});

router.put('/games/movements/east', (request, response) => {
  movement('east', gameObject);
  response.json(gameObject);
});

router.put('/games/movements/west', (request, response) => {
  movement('west', gameObject);
  response.json(gameObject);
});

router.put('/games/movements/south', (request, response) => {
  movement('south', gameObject);
  response.json(gameObject);
});

router.post('/games/talk', (request, response) => {
  response.json(talk(gameObject));
});

module.exports = router;
