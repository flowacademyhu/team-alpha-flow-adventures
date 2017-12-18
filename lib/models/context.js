'use strict';

const map = require('./game-area/index');
const Player = require('./characters/player');
const gameRound = require('../round');
const inventory = require('../controllers/menu/inventory');
const gameState = require('./game-state');

class Context {
  constructor () {
    this.map = map();
    this.inventory = inventory.inventory;
    this.player = new Player('Kozsó', 30, 10, 5);
    this.warning = '';
    this.round = gameRound;
    this.gameState = gameState;
  }
}

module.exports = Context;
