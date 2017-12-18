'use strict';

const random = require('./random/random');

module.exports = function (gameObject) {
  let n = 1;
  let targetNpc = gameObject.map.matrixCurrentPosition.currentNpc;
  if (targetNpc === null) {
    gameObject.attackMessage = 'Kit?';
    return gameObject;
  }
  if (targetNpc !== null && targetNpc.hp < 1) {
    gameObject.attackMessage = 'A(z) ' + targetNpc.name + ' halott, nincs kivel harcolnod.';
    return gameObject;
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
      gameObject.round++;
    }
    if (gameObject.player.hp <= 0) {
      gameObject.death = 'Elsötétül a világ előtted. Meghaltál!';
      return gameObject;
    }
    if (targetNpc.name === 'sárkány' && targetNpc.hp <= 0) {
      gameObject.win = 'NYERTEEEEEEEEEEEEEEELLLLLLLLLLLLLLLLLLLLL';
      return gameObject;
    }
    if (targetNpc.items !== null && targetNpc.hp <= 0) {
      gameObject.attackMessage = 'A(z) ' + targetNpc.name + ' meghalt. Elejtette a(z) <span class="useable-items interactables">' + targetNpc.items.name + '</span>-t';
      return gameObject;
    }
    gameObject.attackMessage = 'Jelenlegi életerőd ' + gameObject.player.hp + ' || ellenfeled hátramaradó életereje ' + targetNpc.hp;
    return gameObject;
  }
};
