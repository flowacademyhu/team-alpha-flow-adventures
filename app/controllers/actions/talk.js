'use strict';

const gameArea = require('../../models/game-area/game-field/index');
const position = require('../../models/game-area/starter-position');

module.exports = function (npc, matrix) {
  let targetNpc = gameArea[matrix[position[1]][position[0]]].npc;
  if (gameArea[matrix[position[1]][position[0]]].npc !== null) {
    if (gameArea[matrix[position[1]][position[0]]].npc.name === npc) {
      if (targetNpc.hp > 0) {
        console.log(gameArea[matrix[position[1]][position[0]]].npc.text);
      } else {
        console.log('A halottak nem beszélnek... Ebben a játékban.');
      }
    } else {
      console.log('Kihez beszélsz?');
    }
  } else {
    console.log('Nincs itt senki.');
  }
};
