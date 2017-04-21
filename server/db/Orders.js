const conn = require('./conn');

const Orders = conn.define('order', {
  completeDate: conn.Sequelize.DATE,
  orderPrice: conn.Sequelize.NUMBER,
  tax: conn.Sequelize.INTEGER
});

module.exports = Orders;

