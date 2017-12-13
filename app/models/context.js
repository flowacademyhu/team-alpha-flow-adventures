'use strict';

const map = require('./game-area/index');
const Player = require('./characters/player');
const gameRound = require('../../lib/round');
const inventory = require('../controllers/menu/inventory');

class Context {
  constructor () {
    this.map = map();
    this.inventory = inventory.inventory.activeItems;
    this.player = new Player('Kozsó', 30, 10, 5);
    this.warning = '';
    this.round = gameRound;
  }
}

module.exports = Context;
