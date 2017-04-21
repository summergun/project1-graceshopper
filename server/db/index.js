const conn = require('./conn');
const Orders = require('./Orders');

const sync = (force) => conn.sync({ force });


const seed = () => sync(true)
.then(() => Orders.bulkCreate([
  {completedDate: Date.now(), orderPrice: 1.99, tax: 1.99 * 0.7},
  {}
]));

module.exports = {
  sync,
  seed,
  models: {
    Orders
  }
};
