const Sequelize = require('sequelize');
const db = require('./db');

const Order = db.define('orders', {
  complete: {
  	type: Sequelize.DATE,
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    }
  },
  orderPrice: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  tax: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
});

module.exports = Order;

