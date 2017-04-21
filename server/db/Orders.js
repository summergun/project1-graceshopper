const conn = require('./conn');

const attrs = {
  completedDate: conn.Sequelize.Date,
  orderPrice: conn.Sequelize.INTEGER,
  tax: conn.Sequelize.INTEGER
};

module.exports = conn.define('order', attrs);
