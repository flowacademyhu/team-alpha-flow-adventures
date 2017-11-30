const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize').getInstance();

const NpcInstances = sequelize.define('NpcInstances', {
  context_id: Sequelize.INTEGER,
  npc_id: Sequelize.INTEGER,
  item_id: Sequelize.INTEGER,
  health: Sequelize.INTEGER,
  damage: Sequelize.INTEGER,
  defense: Sequelize.INTEGER
});

module.exports = NpcInstances;
