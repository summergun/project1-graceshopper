const Sequelize = require('sequelize');
const conn = require('./conn');

const Artist = conn.define('artist', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  imgURL: {
    type: Sequelize.STRING
  }
});

module.exports = Artist;
