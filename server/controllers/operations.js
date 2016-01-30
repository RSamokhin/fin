
var baseOperations = require('./baseoperations');
var router = require('koa-router')();

var models = require("../models");

var accounts = Object.create(baseOperations);
accounts.model = models.Operation;
accounts.path = '/operations';
accounts.validateAdd = function * ()
{
    this.req.checkBody('description').notEmpty().trim().len(1, 255);
};
accounts.validateUpdate = function * ()
{
    this.req.checkBody('rootTransactionId').notEmpty().trim().toInt();
    this.validateAdd();
};
accounts.extractAddData = function(body)
{
    return {
        description: body['description']
    };
};
accounts.extractUpdateData = function(body)
{
    var data = this.extractAddData(body);
    data['rootTransactionId'] = body['rootTransactionId'];
    return data;
};
accounts.registerRoutes(router);

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};