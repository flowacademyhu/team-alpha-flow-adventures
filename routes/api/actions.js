const express = require('express');
const actions = express();
const talk = require('../../lib/controllers/actions/talk');
const rest = require('../../lib/controllers/actions/rest');
const attack = require('../../lib/controllers/actions/attack/attack');
const pickup = require('../../lib/controllers/actions/inventory-controll/pick-up');

actions.post('/talk', (request, response) => {
  response.json(talk(global.gameObject));
});

actions.post('/rest', (request, response) => {
  response.json(rest(global.gameObject, request.body.restedRoundNumber));
});

actions.post('/attack', (request, response) => {
  response.json(attack(global.gameObject));
});

actions.post('/pickup', (request, response) => {
  response.json(pickup(global.gameObject));
});

module.exports = actions;
