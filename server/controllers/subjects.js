
var baseTable = require('./basetable');
var router = require('koa-router')();
var koaBody = require('koa-body')();
var koaValidate = require('koa-validate')();
var csrf = require('koa-csrf');

var models = require("../models");

var render = require('../views');

router.get('/subjects', baseTable({
    columns: ['id', 'name', 'description', 'INN', 'KPP', 'INN', 'isSystem', 'type'],
    defaultOrder: ['id', 'asc']
}), function * (){
    var subjects = yield models.Subject.findAll({
        order: this.baseTable.order,
        limit: this.baseTable.limit
    });

    if (this.accepts('html', 'json') === 'json')
    {
        this.body = subjects.map(subject => subject.toJSON());
        return;
    }

    this.body = yield render('modules/subjects', {
        subjects: subjects.map(subject => subject.toJSON()),
        order: this.baseTable.order,
        fromAjax: JSON.stringify(this.query.fromAjax) ? 1 : 0
    });
});

router.post('/subjects', koaBody, koaValidate, csrf.middleware, function * (){
    this.checkBody('name').notEmpty().trim().len(1, 255);
    this.checkBody('description').notEmpty().trim().len(1, 255);
    this.checkBody('INN').notEmpty().trim().len(1, 12);
    this.checkBody('KPP').notEmpty().trim().len(1, 30);
    this.checkBody('isSystem').optional().toBoolean();
    this.checkBody('type').notEmpty().trim().isIn(['Компания', 'ИП', 'Физ-лицо']);

    if (this.errors)
    {
        this.body = {
            errors: this.errors
        };
        return;
    }
    var data = this.request.body;
    var client = yield models.Subject.create({
        'name': data['name'],
        'description': data['description'],
        'type': data['type'],
        'isSystem': data['isSystem'],
        'INN': data['INN'],
        'KPP': data['KPP']
    });

    this.body = client.toJSON();
});

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};