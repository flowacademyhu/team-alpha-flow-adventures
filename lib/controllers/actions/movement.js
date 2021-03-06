'use strict';

const matrixCurrentPosition = require('../../../lib/matrix-current-position');
const gameArea = require('../../models/game-area/game-field/index');
const position = require('../../models/game-area/starter-position');

module.exports = function (direction, gameObject) {
  let coordOne = position[1];
  let coordTwo = position[0];
  gameObject.round++;

  switch (direction) {
    case 'east':
      coordTwo++;
      break;
    case 'west':
      coordTwo--;
      break;
    case 'north':
      coordOne--;
      break;
    case 'south':
      coordOne++;
      break;
  }

  if (typeof gameObject.map.matrix[coordTwo] === 'object' &&
      typeof gameObject.map.matrix[coordOne] === 'object' &&
      gameArea[gameObject.map.matrix[coordOne][coordTwo]].accessible) {
    position[0] = coordTwo;
    position[1] = coordOne;
    gameObject.warning = '';
  } else {
    gameObject.warning = 'Erre nem lehet menni.';
  }
  gameObject.map.matrixCurrentPosition = matrixCurrentPosition(position[1], position[0], gameObject.map.matrix, gameArea);
  return gameObject;
};
