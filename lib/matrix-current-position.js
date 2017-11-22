'use strict';

const matrixEdgeCheck = require('./matrix-edge-check');

module.exports = function matrixCurrentPosition (coordOne, coordTwo, matrix, gameArea) {
  if (gameArea[matrix[coordOne][coordTwo]].npc !== null && gameArea[matrix[coordOne][coordTwo]].npc.hp <= 0) {
    console.log(gameArea[matrix[coordOne][coordTwo]].deadNpcDesc);
  } else {
    console.log(gameArea[matrix[coordOne][coordTwo]].desc);
  }
  console.log('--------------------------------------');

  if (matrixEdgeCheck(coordTwo, coordOne - 1, matrix)) {
    console.log('Tőled északra ' + gameArea[matrix[coordOne - 1][coordTwo]].shortDesc);
  } else {
    console.log('Tőled északra piciny világod szélét látod, a leesés fenyeget! JUJJUJ');
  }

  if (matrixEdgeCheck(coordTwo, coordOne + 1, matrix)) {
    console.log('Tőled délre ' + gameArea[matrix[coordOne + 1][coordTwo]].shortDesc);
  } else {
    console.log('Tőled délre piciny világod szélét látod, a leesés fenyeget! JUJJUJ');
  }

  if (matrixEdgeCheck(coordTwo + 1, coordOne, matrix)) {
    console.log('Tőled keletre ' + gameArea[matrix[coordOne][coordTwo + 1]].shortDesc);
  } else {
    console.log('Tőled keletre piciny világod szélét látod, a leesés fenyeget! JUJJUJ');
  }

  if (matrixEdgeCheck(coordTwo - 1, coordOne, matrix)) {
    console.log('Tőled nyugatra ' + gameArea[matrix[coordOne][coordTwo - 1]].shortDesc);
  } else {
    console.log('Tőled nyugatra piciny világod szélét látod, a leesés fenyeget! JUJJUJ');
  }
};
