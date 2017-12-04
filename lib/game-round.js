'use strict';

let roundCounter = 0;

module.exports = {
  counter: function () {
    roundCounter++;
    return roundCounter;
  }
};
