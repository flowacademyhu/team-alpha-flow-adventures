const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize').getInstance();

const Item = sequelize.define('student', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  health_modifier: Sequelize.INTEGER,
  damage_modifier: Sequelize.INTEGER,
  defense_modifier: Sequelize.INTEGER
});

module.exports = Item;
