const npcsControllers = require('./controllers/npcs');

const express = require('express');
const router = express.Router();
const game = require('../bin/game');
const movement = require('../app/controllers/actions/movement');
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
  response.json(gameObject.matrixCurrentPosition);
});

router.put('/games/movements/north', (request, response) => {
  gameObject.matrixCurrentPosition = movement('north', gameObject.matrix);
  response.json(gameObject.matrixCurrentPosition);
});

router.put('/games/movements/east', (request, response) => {
  gameObject.matrixCurrentPosition = movement('east', gameObject.matrix);
  response.json(gameObject.matrixCurrentPosition);
});

router.put('/games/movements/west', (request, response) => {
  gameObject.matrixCurrentPosition = movement('west', gameObject.matrix);
  response.json(gameObject.matrixCurrentPosition);
});

router.put('/games/movements/south', (request, response) => {
  gameObject.matrixCurrentPosition = movement('south', gameObject.matrix);
  response.json(gameObject.matrixCurrentPosition);
});

module.exports = router;
