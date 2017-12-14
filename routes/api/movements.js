const express = require('express');
const movements = express();
const move = require('../../lib/controllers/actions/movement');

movements.put('/north', (request, response) => {
  move('north', global.gameObject);
  response.json(global.gameObject);
});

movements.put('/east', (request, response) => {
  move('east', global.gameObject);
  response.json(global.gameObject);
});

movements.put('/west', (request, response) => {
  move('west', global.gameObject);
  response.json(global.gameObject);
});

movements.put('/south', (request, response) => {
  move('south', global.gameObject);
  response.json(global.gameObject);
});

module.exports = movements;
