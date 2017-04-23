const Sequelize = require('sequelize');
const conn = require('./conn');

const User = conn.define('user', {
  userName: {
    type: Sequelize.STRING,
    unique: true
  },
  salt: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  }
});

module.exports = User;
