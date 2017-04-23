const Sequelize = require('sequelize');
//const db = require('./server/db')
const logging = process.env.SQL_LOGGING === 'true' ? true : false;

const conn = new Sequelize(process.env.DATABASE_URL, {
  logging 
});

module.exports = conn;