const Sequelize = require('sequelize')
const conn = require('./conn');


const User = db.define('users', {
  userName: {
      type:Sequelize.STRING,
      unique:true
  },
  firstName:{
      type:Sequelize.STRING
  },
  lastName:{
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