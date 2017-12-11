'use strict';

const matrixEdgeCheck = require('./matrix-edge-check');

module.exports = function matrixCurrentPosition (coordOne, coordTwo, matrix, gameArea) {
  let answer = {
    fieldDesc: '',
    northDesc: '',
    southDesc: '',
    eastDesc: '',
    westDesc: '',
    currentNpc: null
  };

  if (gameArea[matrix[coordOne][coordTwo]].npc !== null && gameArea[matrix[coordOne][coordTwo]].npc.hp <= 0) {
    answer.fieldDesc = gameArea[matrix[coordOne][coordTwo]].deadNpcDesc;
    answer.currentNpc = null;
  } else {
    answer.fieldDesc = gameArea[matrix[coordOne][coordTwo]].desc;
    answer.currentNpc = gameArea[matrix[coordOne][coordTwo]].npc;
  }
  console.log('--------------------------------------');

  if (matrixEdgeCheck(coordTwo, coordOne - 1, matrix)) {
    answer.northDesc = 'Tőled északra ' + gameArea[matrix[coordOne - 1][coordTwo]].shortDesc;
  } else {
    answer.northDesc = 'Tőled északra piciny világod szélét látod, a leesés fenyeget! JUJJUJ';
  }

  if (matrixEdgeCheck(coordTwo, coordOne + 1, matrix)) {
    answer.southDesc = 'Tőled délre ' + gameArea[matrix[coordOne + 1][coordTwo]].shortDesc;
  } else {
    answer.southDesc = 'Tőled délre piciny világod szélét látod, a leesés fenyeget! JUJJUJ';
  }

  if (matrixEdgeCheck(coordTwo + 1, coordOne, matrix)) {
    answer.eastDesc = 'Tőled keletre ' + gameArea[matrix[coordOne][coordTwo + 1]].shortDesc;
  } else {
    answer.eastDesc = 'Tőled keletre piciny világod szélét látod, a leesés fenyeget! JUJJUJ';
  }

  if (matrixEdgeCheck(coordTwo - 1, coordOne, matrix)) {
    answer.westDesc = 'Tőled nyugatra ' + gameArea[matrix[coordOne][coordTwo - 1]].shortDesc;
  } else {
    answer.westDesc = 'Tőled nyugatra piciny világod szélét látod, a leesés fenyeget! JUJJUJ';
  }
  return answer;
};
