const express = require('express');
const api = express();
const movements = require('./movements');
const actions = require('./actions');
const game = require('../../lib/game');

api.post('/game', (request, response) => {
  global.gameObject = game();
  response.json(global.gameObject); // Tasi mondta
});

api.use('/movements', movements);
api.use('/actions', actions);

module.exports = api;

