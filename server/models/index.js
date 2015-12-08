
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var config = require('../config').get('database');

var sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.server,
    dialect: config.dialect
});

var db = {};
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js') && !fs.lstatSync(__dirname + '/' + file).isDirectory();
    })
    .forEach(function(file) {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;