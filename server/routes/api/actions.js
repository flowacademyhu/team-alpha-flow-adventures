const express = require('express');
const actions = express();
const talk = require('../../../app/controllers/actions/talk');
const rest = require('../../../app/controllers/actions/rest');
const attack = require('../../../app/controllers/actions/attack/attack');
const pickup = require('../../../app/controllers/actions/inventory-controll/pick-up');

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
