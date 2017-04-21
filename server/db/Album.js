const Sequalize = require('sequalize');
const conn = require('./conn');

const Album = conn.define('album',{
	name:{
		type:Sequalize.STRING,
		defaultValue: null
	},
	year: {
		type:Sequalize.STRING,
		defaultValue: null
	},
	genre: {
		type:Sequalize.STRING,
		defaultValue:null
	}

});

module.exports = Album;