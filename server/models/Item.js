const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize').getInstance();

const Item = sequelize.define('Item', {
  name: Sequelize.STRING,
  default_status: Sequelize.INTEGER,
  description: Sequelize.TEXT,
  health_modifier: Sequelize.INTEGER,
  damage_modifier: Sequelize.INTEGER,
  defense_modifier: Sequelize.INTEGER
});

module.exports = Item;
