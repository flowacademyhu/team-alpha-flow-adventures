'use strict';

const matrixCurrentPosition = require('../../../lib/matrix-current-position');
const position = require('./starter-position');
const gameArea = require('./game-field/index');

module.exports = function map () {
  let matrix = [];
  let n = 0;

  for (let i = 0; i < 10; i++) {
    matrix[i] = [];
    for (let j = 0; j < 10; j++) {
      matrix[i][j] = n;
      n++;
    }
  }
  matrixCurrentPosition(position[1], position[0], matrix, gameArea);
  return matrix;
};
