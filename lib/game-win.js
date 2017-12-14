'use strict';
const round = require('./round');

const dragon = require('./models/characters/npc/hostile/dragon');

module.exports = function (position, gameIsRunning) {
  if (dragon.hp <= 0) {
    console.log('X-------------------------------------------------------------------------------X');
    console.log('|                  A sárkány hangos üvöltéssel kilehelte a lelkét!              |');
    console.log('|            A királylány zokogva omlik karjaidba, majd köszönetet mond.        |');
    console.log('| Hősként sétálhatsz el a naplementében (diadalmas epikus zenével a háttérben)! |');
    console.log('|                                                                               |');
    console.log('|                    Gratulálunk, reméljük jól szórakoztál!                     |');
    console.log('|         Vajon képes vagy kevesebb körből is megmenteni a királylányt?         |');
    console.log('|                                                                               |');
    console.log('X-------------------------------------------------------------------------------X');
    console.log('                            A köreid száma: ' + round.counter());
    return false;
  } else {
    return true;
  }
};
