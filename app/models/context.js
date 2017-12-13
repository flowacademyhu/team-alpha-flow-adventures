'use strict';

const map = require('./game-area/index');
const Player = require('./characters/player');
const gameRound = require('../../lib/round');

class Context {
  constructor () {
    this.map = map();
    this.player = new Player('Kozsó', 30, 10, 5);
    this.warning = '';
    this.round = gameRound;
  }
}

module.exports = Context;
