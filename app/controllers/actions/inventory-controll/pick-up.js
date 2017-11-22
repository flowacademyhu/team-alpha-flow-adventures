'use strict';

const gameArea = require('../../../models/game-area/game-field/index');
const position = require('../../../models/game-area/starter-position');
const hasiTasi = require('../../menu/inventory');
const castle = require('../../../models/game-area/game-field/castle/castle');

module.exports = function (item, matrix) {
  let currentNpc = gameArea[matrix[position[1]][position[0]]].npc;
  if (gameArea[matrix[position[1]][position[0]]].item !== null && gameArea[matrix[position[1]][position[0]]].item.name === 'kulcs') {
    hasiTasi.inventory.inactiveItems.push(gameArea[matrix[position[1]][position[0]]].item);
    castle.accessible = true;
    console.log('A(z) ' + item + ' bekerült a hasiTasiba. Mostmár bejuthatsz a várba. Nosza!');
  } else if (currentNpc.hp > 0 && item === currentNpc.items.name) {
    console.log('A(z) ' + currentNpc.name + ' nem hagyja hogy elvedd tőle!');
  } else if (item === currentNpc.items.name) {
    hasiTasi.inventory.inactiveItems.push(currentNpc.items);
    console.log('A(z) ' + item + ' bekerült a hasiTasiba.');
  } else {
    console.log('Nem találom sehol... Biztos jó tárgynevet írtál be?');
  }
};
