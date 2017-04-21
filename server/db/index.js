const conn = require('./conn');
const Orders = require('./Orders');
const Song = require('./Song');
const Album = require('./Album');

const sync = (force) => conn.sync({ force });

module.exports = {
  sync,
  models: {
    Orders
  }
};
