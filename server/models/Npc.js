const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize.js').getInstance();

const Npc = sequelize.define('Npc', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  item_id: Sequelize.INTEGER,
  health: Sequelize.INTEGER,
  damage: Sequelize.INTEGER,
  defense: Sequelize.INTEGER,
  status: Sequelize.BOOLEAN,
  alive_description: Sequelize.STRING,
  dead_description: Sequelize.STRING,
  alive_far_description: Sequelize.STRING,
  dead_far_description: Sequelize.STRING,
  speak: Sequelize.STRING
});

module.exports = Npc;
