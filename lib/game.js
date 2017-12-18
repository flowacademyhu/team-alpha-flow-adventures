'use strict';

const ContextModel = require('./models/context');

function game () {
  return new ContextModel();
}
module.exports = game;
