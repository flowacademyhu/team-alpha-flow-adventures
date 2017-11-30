const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize').getInstance();

const Game_area = sequelize.define('Game_area', {
  map_id: Sequelize.INTEGER,
  x_coordinate: Sequelize.INTEGER,
  y_coordinate: Sequelize.INTEGER,
  gamefield_id: Sequelize.INTEGER,
  npc_id: Sequelize.INTEGER,
  item_id: Sequelize.INTEGER
});

module.exports = Game_area;