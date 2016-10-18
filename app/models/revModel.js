//Pulls Mongoose dependency for creating schemas
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Creates a revenue schema
var RevenueSchema = new Schema({
	revdate: {
		type: Date,
		required: true
	},
	revdesc: {
		type: String,
		required: true
	},
	revamount: {
		type: Number,
		required: true
	}
});


//Exports BeerList Schema
module.exports = mongoose.model('budget-revenue', RevenueSchema);