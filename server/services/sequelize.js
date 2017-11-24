const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE,
  process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = {
  init: (options) => {
    return sequelize
    .authenticate()
    /* .then(() => require('../models/student')) */
    .then(() => sequelize.sync(options));
  },
  getInstance: () => sequelize
};
