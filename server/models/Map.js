const Sequelize = require('sequelize');
const sequelize = require('../services/sequelize').getInstance();

const Map = sequelize.define('Map', {
  name: Sequelize.STRING,
  author: sequelize.STRING
});

module.exports = Map;
