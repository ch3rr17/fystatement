//Pulls Mongoose dependency for creating schemas
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Creates an expense schema
var ExpenseSchema = new Schema({
	expdate: {
		type: Date,
		default: Date.now,
		required: true
	},
	expdesc: {
		type: String,
		required: true
	},
	expamount: {
		type: Number,
		required: true
	}
});

//Exports ExpenseList Schema
module.exports = mongoose.model('budget-expense', ExpenseSchema);