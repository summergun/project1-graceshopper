const Sequelize = require('sequelize');


const Review = db.define('review', {
    rating: {
		type: Sequelize.INTEGER,
		allowNull: false,
		validate: {
			min: 1,
			max: 5
		}
	},
    title: {
		type: Sequelize.TEXT,
		defaultValue: null
	},
	content: {
		type: Sequelize.TEXT,
		defaultValue: null
	}
	
});

module.exports = Review;