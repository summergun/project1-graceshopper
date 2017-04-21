const Sequalize = require('sequalize');
const conn = require('./conn');

const Song = conn.define('song',{
	name:{
		type:Sequalize.STRING,
		defaultValue: null
	}
	year: {
		type:Sequalize.STRING,
		defaultValue: null
	}
	duration: {
		type:Sequalize.NUMBER,
		defaultValue:null
	}
	price: {
		type:Sequalize.NUMBER,
		defaultValue:null
	}
	description: {
		type: Sequalize.TEXT,
		defaultValue: null
	}

})