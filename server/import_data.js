
var co = require('co');
var request = require('request');
var moment = require('moment');
var assert = require('assert');

var config = require('./config');
var models = require("./models");

co(function * (){
    try
    {
        //yield models.sequelize.sync();

        var subjects = /** @type {!Array} */(require('./subjects.json'));
        for(var i = 0; i < subjects.length; i++)
        {
            var record = yield models.Subject.create(subjects[i]);
        }
    }
    catch(e)
    {
        console.log('Error!');
        console.log(e.message);
    }
});
