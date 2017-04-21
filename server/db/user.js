const Sequelize = require('sequelize')
const conn = require('./conn');


const User = db.define('users', {
  username: {
      type:Sequelize.STRING,
      unique:true
  },
  first_name:{
      type:Sequelize.STRING
  },
  last_name:{
      type:Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
			isEmail: true,
			notEmpty: true,
		}
  }

}) ;

module.exports = Review;