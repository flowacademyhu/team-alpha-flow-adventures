'use strict';
const castle = require('../../../models/game-area/game-field/castle/castle');

module.exports = function (gameObject) {
  let currentNpc = gameObject.map.matrixCurrentPosition.currentNpc;
  let onfieldItem = gameObject.map.matrixCurrentPosition.currentItem;

  if (onfieldItem && onfieldItem.name === 'kulcs') {
    gameObject.inventory.inactiveItems.push(onfieldItem);
    castle.accessible = true;
    gameObject.itemMessage = 'A(z) <span class="useable-items interactables">' + onfieldItem.name + '</span> bekerült a hátizsákba. Mostmár bejuthatsz a várba. Nosza!';
    return gameObject;

  } else if (currentNpc.hp > 0 && onfieldItem.name === currentNpc.items.name) {
    gameObject.itemMessage = 'A(z) ' + currentNpc.name + ' nem hagyja hogy elvedd tőle!';
    return gameObject;

  } else if (currentNpc.hp <= 0 && currentNpc.items !== null) {
    gameObject.inventory.inactiveItems.push(currentNpc.items);
    gameObject.itemMessage = 'A(z) <span class="useable-items interactables">' + currentNpc.items.name + '</span> bekerült a hátizsákba.';
    currentNpc.items = null;
    return gameObject;

  } else {
    gameObject.itemMessage = 'Nem találom sehol... Mire gondoltál?';
    return gameObject;

  }
};
