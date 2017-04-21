// const conn = require('./conn');

// const Orders = conn.define('order', {
//   completeDate: conn.Sequelize.DATE,
//   orderPrice: conn.Sequelize.NUMBER,
//   tax: conn.Sequelize.INTEGER
// });

// module.exports = Orders;

const conn = require('./conn');

const attrs = {
  completedDate: conn.Sequelize.Date,
  orderPrice: conn.Sequelize.INTEGER,
  tax: conn.Sequelize.INTEGER
};

module.exports = conn.define('order', attrs);
