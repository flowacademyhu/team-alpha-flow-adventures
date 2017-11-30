const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize').getInstance();

const Gamefield = sequelize.define('Gamefield', {
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  far_description: Sequelize.STRING,
  default_acces: Sequelize.BOOLEAN
});

module.exports = Gamefield;
