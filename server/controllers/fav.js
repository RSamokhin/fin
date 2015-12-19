
var router = require('koa-router')();
var koaBody = require('koa-body')();
var koaValidate = require('koa-validate')();
var csrf = require('koa-csrf');

var models = require("../models");
var user = require("./user");

var render = require('../views');

function toggleUserArraySettingItem(setting)
{
    return function * () {
        this.checkBody('block').notEmpty().isIn(['search', 'list', 'add', 'favs']);
        this.checkBody('state').notEmpty().toBoolean();

        if (this.errors)
        {
            this.body = this.errors;
            return;
        }

        var settings = this.user.settings || {};
        var expand = settings[setting] || (settings[setting] = []);
        var state = this.request.body.state;
        var block = this.request.body.block;
        var index = expand.indexOf(block);
        if (state)
        {
            if (index === -1)
                expand.push(block);
        }
        else
        {
            if (index !== -1)
                expand.splice(index, 1);
        }
        this.user.settings = settings;
        yield this.user.save();
        this.body = settings;
    };
}

router.get('/blocks/settings', user.loadUser, function * ()
{
    var defaultSettings = {
        favs: [],
        expand: []
    };
    var settings = {};
    if (this.user.settings)
    {
        var userSettings = this.user.settings;
        settings.favs = userSettings.favs || defaultSettings.favs;
        settings.expand = userSettings.expand || defaultSettings.expand;
    }
    else
    {
        settings = defaultSettings;
    }
    this.body = settings;
});

router.post(
    '/blocks/expand',
    koaBody, koaValidate, csrf.middleware,
    user.loadUser, toggleUserArraySettingItem('expand'));
router.post(
    '/blocks/fav',
    koaBody, koaValidate, csrf.middleware,
    user.loadUser, toggleUserArraySettingItem('favs'));

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
    this.body = yield render('modules/fav-cards', {
        favs: data,
        fName: 'Избранные субъекты',
        bName: 'Скрыть',
        fromAjax: JSON.stringify(this.query.fromAjax) ? 1 : 0
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