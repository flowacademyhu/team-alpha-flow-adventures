const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize.js').getInstance();

const GameAreaInstances = sequelize.define('GameAreaInstances', {
  context_id: Sequelize.INTEGER,
  game_area_id: Sequelize.INTEGER,
  access: Sequelize.BOOLEAN
});

module.exports = GameAreaInstances;
