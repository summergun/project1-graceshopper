const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  completedDate: Sequelize.DATE,
  orderPrice: Sequelize.INTEGER,
  tax: Sequelize.INTEGER
};

module.exports = conn.define('order', attrs);
