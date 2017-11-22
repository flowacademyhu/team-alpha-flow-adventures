'use strict';

module.exports = function matrixEdgeCheck (x, y, matrix) {
  if (typeof matrix[x] === 'object' && typeof matrix[y] === 'object') {
    return true;
  } else {
    return false;
  }
};
