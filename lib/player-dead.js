'use strict';

module.exports = function (gameObject) {
  if (gameObject.player.hp <= 0) {
    gameObject.death = 'Elsötétül a világ előtted. Meghaltál!';
    return gameObject.death;
  }
};
