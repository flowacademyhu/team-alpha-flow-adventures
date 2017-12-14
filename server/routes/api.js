const express = require('express');
const api = express();
const game = require('../../bin/game');
const movement = require('../../app/controllers/actions/movement');
const talk = require('../../app/controllers/actions/talk');
let rest = require('../../app/controllers/actions/rest');
const attack = require('../../app/controllers/actions/attack/attack');
const pickup = require('../../app/controllers/actions/inventory-controll/pick-up');
let gameObject;

api.post('/game', (request, response) => {
  gameObject = game();
  response.json(gameObject);
});

api.put('/movements/north', (request, response) => {
  movement('north', gameObject);
  response.json(gameObject);
});

api.put('/movements/east', (request, response) => {
  movement('east', gameObject);
  response.json(gameObject);
});

api.put('/movements/west', (request, response) => {
  movement('west', gameObject);
  response.json(gameObject);
});

api.put('/movements/south', (request, response) => {
  movement('south', gameObject);
  response.json(gameObject);
});

api.post('/talk', (request, response) => {
  response.json(talk(gameObject));
});

api.post('/rest', (request, response) => {
  response.json(rest(gameObject, request.body.restedRoundNumber));
});
api.post('/attack', (request, response) => {
  response.json(attack(gameObject));
});

api.post('/pickup', (request, response) => {
  response.json(pickup(gameObject));
});

module.exports = api;
