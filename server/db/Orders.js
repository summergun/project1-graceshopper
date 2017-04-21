const Sequelize = require('sequelize');
const conn = require('./conn');

const Orders = conn.define('order', {
  completeDate: {
  	type: Sequelize.DATE,
  },
  orderPrice: {
    type: Sequelize.NUMBER,
  },
  tax: {
    type: Sequelize.DECIMAL,
  }
});

module.exports = Orders;

