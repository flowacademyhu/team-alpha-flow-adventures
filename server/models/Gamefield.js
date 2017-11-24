const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize');

const Gamefield = sequelize.define('Gamefield', {
  id: Sequelize.INTEGER,
  type: Sequelize.STRING,
  description: Sequelize.STRING,
  far_description: Sequelize.STRING,
  acces: Sequelize.BOOLEAN
});

module.exports = Gamefield;
