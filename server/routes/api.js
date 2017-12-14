const express = require('express');
const api = express();
const movements = require('./api/movements');
const actions = require('./api/actions');
const game = require('../../bin/game');

api.post('/game', (request, response) => {
  global.gameObject = game();
  response.json(global.gameObject); // Tasi mondta
});

api.use('/movements', movements);
api.use('/actions', actions);

module.exports = api;
