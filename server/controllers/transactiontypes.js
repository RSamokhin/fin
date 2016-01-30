
var baseOperations = require('./baseoperations');
var router = require('koa-router')();

var models = require("../models");

var accounts = Object.create(baseOperations);
accounts.model = models.TransactionType;
accounts.path = '/transactiontypes';
accounts.validateAdd = function * ()
{
    this.req.checkBody('name').notEmpty().trim().len(1, 255);
    this.req.checkBody('formula').notEmpty().trim().len(1, 255);
    this.req.checkBody('defaultTax').notEmpty().trim().toFloat();
};
accounts.extractAddData = function(body)
{
    return {
        name: body['name'],
        formula: body['formula'],
        defaultTax: body['defaultTax']
    };
};
accounts.registerRoutes(router);

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};