
var router = require('koa-router')();
var koaBody = require('koa-body')();
var koaValidate = require('koa-validate')();
var csrf = require('koa-csrf');

var models = require("../models");

var render = require('../views');

router.get('/fav', function * (){

    var favs = yield models.Favorites.findAll({
        where: {
            UserId: this.userId
        },
        include: [{
            model: models.Subject
        }]
    });

    var data = favs.map(fav => fav.toJSON());
    if (this.accepts('html', 'json') === 'json')
    {
        this.body = data;
        return;
    }
    this.body = yield render('modules/fav-form-cards', {
        favs: data,
        fName: 'Избранные субъекты',
        bName: 'Скрыть'
    });
});


router.post('/fav/delete/:id', koaBody, koaValidate, csrf.middleware, function * (){
    this.checkParams('id').notEmpty().toInt();
    if (this.errors)
    {
        this.body = {
            errors: this.errors
        };
        return;
    }

    var fav = yield models.Favorites.findById(this.params.id);
    if (!fav)
    {
        this.status = 404;
        return;
    }
    yield fav.destroy();
    this.body = {
        message: 'OK'
    }
});

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};