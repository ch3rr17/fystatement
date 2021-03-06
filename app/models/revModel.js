//Pulls Mongoose dependency for creating schemas
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Creates a revenue schema
var RevenueSchema = new Schema({
	revdate: {
		type: Date,
		default: Date.now,
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

//Exports RevenueList Schema
module.exports = mongoose.model('budget-revenue', RevenueSchema);