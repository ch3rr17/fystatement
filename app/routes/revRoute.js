//Dependecies
var express = require('express');
var Revenue = require('../models/revModel.js');


//Opens App Routes
module.exports = function(app) {

    //GET Routes
    //Grabs all breweries from the table
    app.get('/revenues', function(req, res) {

        //Uses Mongoose schema to run search
        var query = Revenue.find({});
        query.exec(function(err, revenues) {
            if (err) {
                res.send(err);
            }

            //If no errors are found, it responds with a JSON of all revenues
            else {
                res.json(revenues);
            }
        });
    });

    

    //POST Routes
    //Adds a new brewery to the list
    app.post('/revenues', function(req,res){

        var newrevenue = new Revenue(req.body);

        newrevenue.save(function(err){
            if(err){
                res.send(err);
                console.log('err', err);
            }
            else{
                res.json(req.body);
                console.log('saved!', newrevenue);
            }
        });
    });

};
