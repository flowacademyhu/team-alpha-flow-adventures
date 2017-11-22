'use strict';

const matrixCurrentPosition = require('../../../lib/matrix-current-position');
const gameArea = require('../../models/game-area/game-field/index');
const position = require('../../models/game-area/starter-position');

module.exports = function (matrix) {
  matrixCurrentPosition(position[1], position[0], matrix, gameArea);
};
