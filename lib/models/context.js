'use strict';

const Map = require('./game-area/index');
const Player = require('./characters/player');
const gameRound = require('../round');
const inventory = require('../controllers/menu/inventory');

class Context {
  constructor () {
    this.map = new Map();
    this.inventory = inventory.inventory;
    this.player = new Player('Kozsó', 20, 10, 5);
    this.warning = '';
    this.round = gameRound;
  }
}

module.exports = Context;
