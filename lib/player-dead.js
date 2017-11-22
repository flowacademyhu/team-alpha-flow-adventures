'use strict';

module.exports = function (playerHp, gameIsRunning) {
  if (playerHp <= 0) {
    console.log('Elsötétül a világ előtted. Meghaltál!');
    return false;
  }
  return true;
};
