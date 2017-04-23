const conn = require('./conn');
const Orders = require('./Orders');
const Songs = require('./Song');
const Albums = require('./Album');

const sync = (force) => conn.sync({ force });

module.exports = {
  sync,
  models: {
    Orders,
    Songs,
    Albums
  }
};
