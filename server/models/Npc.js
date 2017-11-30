const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize.js').getInstance();

const Npc = sequelize.define('Npc', {
  name: Sequelize.STRING,
  default_item_id: Sequelize.INTEGER,
  default_health: Sequelize.INTEGER,
  default_damage: Sequelize.INTEGER,
  default_defense: Sequelize.INTEGER,
  alive_description: Sequelize.STRING,
  dead_description: Sequelize.STRING,
  alive_far_description: Sequelize.STRING,
  dead_far_description: Sequelize.STRING
});

module.exports = Npc;
