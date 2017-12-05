'use strict';

const matrixCurrentPosition = require('../../../lib/matrix-current-position');
const gameArea = require('../../models/game-area/game-field/index');
const position = require('../../models/game-area/starter-position');

module.exports = function (direction, matrix) {
  let coordOne = position[1];
  let coordTwo = position[0];

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
    default:
      console.log('Merre?');
  }

  if (typeof matrix[coordTwo] === 'object' &&
      typeof matrix[coordOne] === 'object' &&
      gameArea[matrix[coordOne][coordTwo]].accessible) {
    position[0] = coordTwo;
    position[1] = coordOne;
  } else {
    console.log('Erre nem lehet menni.');
  }
  return matrixCurrentPosition(position[1], position[0], matrix, gameArea);
};
