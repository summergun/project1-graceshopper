const conn = require('./conn');

const Orders = conn.define('order', {
  completeDate: {
  	type: conn.Sequelize.DATE
  },
  orderPrice: {
    type: conn.Sequelize.NUMBER
  },
  tax: {
    type: conn.Sequelize.DECIMAL
  }
});

module.exports = Orders;

