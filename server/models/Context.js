const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize').getInstance();
const map = require('../../server/models/GameAreaInstances');

const Context = sequelize.define('Context', {
  /* id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  current_game_area_instances_id: Sequelize.INTEGER,
  map_id: Sequelize.INTEGER */

});

module.exports = Context;
