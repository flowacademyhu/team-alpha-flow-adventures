'use strict';

const map = require('./game-area/index');
const Player = require('./characters/player');

class Context {
  constructor () {
    this.map = map();
    this.player = new Player('Kozsó', 30, 10, 5);
  }
}

module.exports = Context;
