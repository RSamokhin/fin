
var baseOperations = require('./baseoperations');
var router = require('koa-router')();

var models = require("../models");

var accounts = Object.create(baseOperations);
accounts.model = models.Subject;
accounts.path = '/subjects';
accounts.searchColumns = ['name', 'description', 'INN', 'KPP', 'type'];
accounts.filterColumns = ['name', 'INN', 'KPP', 'type'];
accounts.validateAdd = function * ()
{
    this.req.checkBody('name').notEmpty().trim().len(1, 255);
    this.req.checkBody('description').notEmpty().trim().len(1, 255);
    this.req.checkBody('INN').notEmpty().trim().len(10, 12);
    this.req.checkBody('KPP').optional().trim().len(1, 9);
    this.req.checkBody('isSystem').optional().toBoolean();
    this.req.checkBody('type').notEmpty().trim().isIn(['Компания', 'ИП', 'Физ-лицо']);
};
accounts.extractAddData = function(body)
{
    return {
        name: body['name'],
        description: body['description'],
        INN: body['INN'],
        KPP: body['KPP'],
        isSystem: body['isSystem'],
        type: body['type']
    };
};
accounts.autoCompleteField = 'name';
accounts.autoCompleteResult = function(subject)
{
    return {
        id: subject.id,
        label: subject.name,
        value: subject.name
    };
};
accounts.registerRoutes(router);

//router.get('/subjects', baseTable.display({
//    columns: ['id', 'name', 'description', 'INN', 'KPP', 'INN', 'isSystem', 'type'],
//    defaultOrder: ['id', 'asc'],
//    searchColumns: ['name', 'description', 'INN', 'KPP'],
//    saveSearchType: 'Subject'
//}), function * (){
//    var subjects = yield models.Subject.findAll({
//        order: this.baseTable.order,
//        limit: this.baseTable.limit,
//        offset: this.baseTable.offset,
//        where: this.baseTable.where
//    });
//    if (this.accepts('html', 'json') === 'json')
//    {
//        this.body = subjects.map(subject => subject.toJSON());
//        return;
//    }
//
//    this.body = yield render('modules/subjects', {
//        subjects: subjects.map(subject => subject.toJSON()),
//        order: this.baseTable.order,
//        fromAjax: JSON.stringify(this.query.fromAjax) ? 1 : 0,
//        splitterTitle: 'Субъекты',
//        menuSubjectsCSSModifier: 'm-active',
//        JSONOnly: JSON.stringify(this.query.JSONOnly) ? 1 : 0
//    });
//});
//
//router.post('/subjects', koaBody, koaValidate, csrf.middleware, function * (){
//    this.checkBody('name').notEmpty().trim().len(1, 255);
//    this.checkBody('description').notEmpty().trim().len(1, 255);
//    this.checkBody('INN').notEmpty().trim().len(1, 12);
//    this.checkBody('KPP').notEmpty().trim().len(1, 30);
//    this.checkBody('isSystem').optional().toBoolean();
//    this.checkBody('type').notEmpty().trim().isIn(['Компания', 'ИП', 'Физ-лицо']);
//
//    if (this.errors)
//    {
//        this.body = {
//            errors: this.errors
//        };
//        return;
//    }
//    var data = this.request.body;
//    var client = yield models.Subject.create({
//        'name': data['name'],
//        'description': data['description'],
//        'type': data['type'],
//        'isSystem': data['isSystem'],
//        'INN': data['INN'],
//        'KPP': data['KPP']
//    });
//
//    this.body = client.toJSON();
//});

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};