'use strict';

const player = require('../../../models/characters/player');
const random = require('./random/random');

module.exports = function (gameObject) {
  let n = 1;
  let targetNpc = gameObject.map.matrixCurrentPosition.currentNpc;
  if (targetNpc === null) {
    return 'Kit?';
  }
  if (targetNpc !== null && targetNpc.hp < 1) {
    return 'A(z) ' + targetNpc.name + ' halott, nincs kivel harcolnod.';
  }
  if (targetNpc !== null && targetNpc.hp > 0) {
    while (targetNpc.hp > 0 && gameObject.player.hp > 0) {
      let playerRandomRoll = random(1, 6);
      let npcRandomRoll = random(1, 6);
      console.log(n + '. kör');
      n++;
      let playerDmg = (gameObject.player.dmg + playerRandomRoll) - targetNpc.def;
      let npcDmg = (targetNpc.dmg + npcRandomRoll) - gameObject.player.def;

      (playerDmg >= 0) ? targetNpc.hp -= playerDmg : targetNpc.hp -= 0;
      console.log('Megtámadtad a ' + targetNpc.name + '-t ' + (playerDmg) + ' sebzéssel');
      (npcDmg >= 0) ? gameObject.player.hp -= npcDmg : gameObject.player.hp -= 0;
      console.log('Megtámadott a ' + targetNpc.name + ' ' + (npcDmg) + ' sebzéssel');
      console.log('--------------------------------------');
    }
    if (targetNpc.items !== null && targetNpc.hp <= 0) {
      return 'A(z) ' + targetNpc.name + ' meghalt. Elejtette a(z) ' + '\x1b[33m' + targetNpc.items.name + '\x1b[0m' + '-t';
    }
    return 'Jelenlegi életerőd ' + gameObject.player.hp + ' || ellenfeled hátramaradó életereje ' + targetNpc.hp;
  }
};
