const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize').getInstance();

const ItemInstances = sequelize.define('ItemInstances', {
  context_id: Sequelize.INTEGER,
  item_id: Sequelize.INTEGER,
  status: Sequelize.INTEGER
});

module.exports = ItemInstances;
