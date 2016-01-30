
var baseOperations = require('./baseoperations');
var router = require('koa-router')();

var models = require("../models");

var accounts = Object.create(baseOperations);
accounts.model = models.Transaction;
accounts.path = '/transactions';
accounts.validateAdd = function * ()
{
    this.req.checkBody('tax').notEmpty().trim().toFloat();
    this.req.checkBody('fromSum').notEmpty().trim().toFloat();
    this.req.checkBody('fixedFormula').notEmpty().trim().len(1, 64);
    this.req.checkBody('orderNumber').notEmpty().trim().len(1, 64);
    this.req.checkBody('comments').notEmpty().trim().len(1, 128);
    this.req.checkBody('submittedAt').notEmpty().trim().toDate();
    this.req.checkBody('toAccountId').notEmpty().trim().toInt();
    this.req.checkBody('fromAccountId').notEmpty().trim().toInt();
    this.req.checkBody('toSubjectId').optional().trim().toInt();
    this.req.checkBody('fromSubjectId').optional().trim().toInt();
    this.req.checkBody('TransactionTypeId').notEmpty().trim().toInt();
    this.req.checkBody('OperationId').notEmpty().trim().toInt();
    yield this.validateRefExist(models.Account, 'toAccountId', this.req.request.body['toAccountId']);
    yield this.validateRefExist(models.Account, 'fromAccountId', this.req.request.body['fromAccountId']);
    yield this.validateRefExist(models.TransactionType, 'TransactionTypeId', this.req.request.body['TransactionTypeId']);
    yield this.validateRefExist(models.Operation, 'OperationId', this.req.request.body['OperationId']);
    if (!isNaN(this.req.request.body['toSubjectId']))
        yield this.validateRefExist(models.Subject, 'toSubjectId', this.req.request.body['toSubjectId']);
    if (!isNaN(this.req.request.body['fromSubjectId']))
        yield this.validateRefExist(models.Subject, 'fromSubjectId', this.req.request.body['fromSubjectId']);
};
accounts.extractAddData = function(body)
{
    var data =  {
        tax: body['tax'],
        fromSum: body['fromSum'],
        fixedFormula: body['fixedFormula'],
        orderNumber: body['orderNumber'],
        comments: body['comments'],
        submittedAt: body['submittedAt'],
        toAccountId: body['toAccountId'],
        fromAccountId: body['fromAccountId'],
        TransactionTypeId: body['TransactionTypeId'],
        OperationId: body['OperationId']
    };
    if (!isNaN(body['fromSubjectId']))
        data['fromSubjectId'] = body['fromSubjectId'];
    if (!isNaN(body['toSubjectId']))
        data['toSubjectId'] = body['toSubjectId'];

    return data;
};
accounts.registerRoutes(router);

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};