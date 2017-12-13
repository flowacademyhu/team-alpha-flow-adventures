'use strict';

const map = require('./game-area/index');
const Player = require('./characters/player');
const inventory = require('../controllers/menu/inventory');

class Context {
  constructor () {
    this.map = map();
    this.inventory = inventory.inventory;
    this.player = new Player('Kozsó', 30, 10, 5);
    this.warning = '';
  }
}

module.exports = Context;
