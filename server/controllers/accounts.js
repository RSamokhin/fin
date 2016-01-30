
var baseTable = require('./basetable');
var baseOperations = require('./baseoperations');
var router = require('koa-router')();
var koaBody = require('koa-body')();
var koaValidate = require('koa-validate')();
var csrf = require('koa-csrf');

var models = require("../models");

var render = require('../views');

var accounts = Object.create(baseOperations);
accounts.model = models.Account;
accounts.path = '/accounts';
accounts.validateAdd = function * ()
{
    this.req.checkBody('name').notEmpty().trim().len(1, 255);
    this.req.checkBody('description').notEmpty().trim().len(1, 255);
    this.req.checkBody('CurrencyId').notEmpty().trim().len(1, 12);
    this.req.checkBody('SubjectId').notEmpty().trim().toInt();
    yield this.validateRefExist(models.Currency, 'CurrencyId', this.req.request.body['CurrencyId']);
    yield this.validateRefExist(models.Subject, 'SubjectId', this.req.request.body['SubjectId']);
};
accounts.validateUpdate = function * ()
{
    this.req.checkBody('amount').notEmpty().trim().toInt();
    this.validateAdd();
};
accounts.extractAddData = function(body)
{
    return {
        name: body['name'],
        description: body['description'],
        CurrencyId: body['CurrencyId'],
        SubjectId: body['SubjectId']
    };
};
accounts.extractUpdateData = function(body)
{
    var data = this.extractAddData(body);
    data['amount'] = body['amount'];
    return data;
};
accounts.registerRoutes(router);

//router.get('/accounts', baseTable.display({
//    columns: ['id', 'name', 'description', 'ammount', 'currency'],
//    defaultOrder: ['id', 'asc'],
//    searchColumns: ['name', 'description', 'currency'],
//    saveSearchType: 'Account'
//}), function * (){
//    var accounts = yield models.Account.findAll({
//        order: this.baseTable.order,
//        limit: this.baseTable.limit,
//        offset: this.baseTable.offset,
//        where: this.baseTable.where,
//        include: [
//            { model: models.Subject}
//        ]
//    });
//    if (this.accepts('html', 'json') === 'json')
//    {
//        this.body = accounts.map(account => account.toJSON());
//        return;
//    }
//
//    this.body = yield render('modules/accounts', {
//        accounts: accounts.map(account => account.toJSON()),
//        order: this.baseTable.order,
//        fromAjax: JSON.stringify(this.query.fromAjax) ? 1 : 0,
//        splitterTitle: 'Субъекты',
//        menuSubjectsCSSModifier: 'm-active',
//        JSONOnly: JSON.stringify(this.query.JSONOnly) ? 1 : 0
//    });
//});
//
//router.post('/accounts', koaBody, koaValidate, csrf.middleware, function * (){
//    this.checkBody('name').notEmpty().trim().len(1, 255);
//    this.checkBody('description').notEmpty().trim().len(1, 255);
//    this.checkBody('currency').notEmpty().trim().len(1, 12);
//    this.checkBody('subject').notEmpty().trim().toInt();
//
//    if (this.errors)
//    {
//        this.body = {
//            errors: this.errors
//        };
//        return;
//    }
//    var data = this.request.body;
//
//    var currency = yield models.Currency.findById(data.currency);
//    if (!currency)
//    {
//        this.body = {
//            errors: [
//                {
//                    currency: "Invalid currency."
//                }
//            ]
//        };
//        return;
//    }
//    var subject = yield models.Subject.findById(data.subject);
//    if (!subject)
//    {
//        this.body = {
//            errors: [
//                {
//                    currency: "Invalid subject."
//                }
//            ]
//        };
//        return;
//    }
//
//    var account = yield models.Account.create({
//        'name': data['name'],
//        'description': data['description'],
//        'currency': currency.id,
//        'ammount': 0,
//        'SubjectId': subject.id
//    });
//    this.body = account.toJSON();
//});

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};