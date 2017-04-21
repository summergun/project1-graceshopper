const conn = require('./conn');
const Orders = require('./Orders');

const sync = (force) => conn.sync({ force });

module.exports = {
  sync,
  models: {
    Orders
  }
};
