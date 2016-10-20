//Dependecies
var express = require('express');
var Expense = require('../models/expModel.js');


//Opens App Routes
module.exports = function(app) {

    //GET Routes
    //Grabs all expenses from the table
    app.get('/expenses', function(req, res) {

        //Uses Mongoose schema to run search
        var query = Expense.find({});
        query.exec(function(err, expenses) {
            if (err) {
                res.send(err);
                console.log(err);
            }
            //If no errors are found, it responds with a JSON of all revenues
            else {
                res.json(expenses);
                console.log(expenses);
            }
        });
    });

    //POST Routes
    //Adds a new expense to the list
    app.post('/expenses', function(req,res){

        var newexpense = new Expense(req.body);

        newexpense.save(function(err){
            if(err){
                res.send(err);
                console.log('err', err);
            }
            else{
                res.json(req.body);
                console.log('saved!', newexpense);
            }
        });
    });
};
