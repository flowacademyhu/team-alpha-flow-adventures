'use strict';

const player = require('../../models/characters/player');
const gameRound = require('../../../lib/game-round');

module.exports = function (inValue) {
  let value = parseInt(inValue);
  let wrongValue;
  if (isNaN(value)) {
    console.log('Add meg egy számmal, hogy mennyit szeretnél gyógyulni.');
    wrongValue = true;
  } else if (value < 0) {
    console.log('Naaaa, nem bánthatod magad csak úgy.');
    wrongValue = true;
  } else if (value === 0) {
    console.log('Ennek te sem látod értelmét remélem.');
    wrongValue = true;
  }
  if (player.hp <= 30 && wrongValue !== true) {
    if (player.hp + value > 30) {
      console.log('Nem tudsz a maximális életerő (30) fölé gyógyulni.');
      if (30 - player.hp === 0) {
        console.log('Teljesen egészséges vagy.');
      } else {
        console.log('Ahhoz, hogy teljesen egészséges legyél ' + (30 - player.hp) + '-t kell gyógyulnod.');
      }
    } else {
      player.hp += value;
      console.log(value + '-t gyógyultál. A jelenlegi életerőd: ', player.hp);
      for (let i = 1; i < value; i++) {
        gameRound.counter();
      }
    }
  }
};
