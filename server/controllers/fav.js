
var assert = require('assert');
var router = require('koa-router')();
var koaBody = require('koa-body')();
var koaValidate = require('koa-validate')();
var csrf = require('koa-csrf');

var config = require('../config');
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

router.post('/fav/add', koaBody, koaValidate, csrf.middleware, function * (){
    this.checkBody('type').notEmpty().isIn(['Subject', 'Account']);
    this.checkBody('id').notEmpty().toInt();
    if (this.errors)
    {
        this.body = {
            errors: this.errors
        };
        return;
    }
    var data = this.request.body;
    var subject = yield models.Subject.findById(data.id);
    if (!subject)
    {
        this.body = {
            errors: [
                {
                    id: "Invalid subject."
                }
            ]
        };
        return;
    }

    var fav = yield models.Favorites.create();
    fav.setUser(this.userId);
    fav.setSubject(subject.id);
    this.body = fav.toJSON();
});

function * saveSearchToHistory (userId, text, type)
{
    var searches = yield models.Searches.findAll({
        where: {
            type: type
        },
        order: [['updatedAt', 'ASC']]
    });
    var maxItems = config.get('maxSearchHistory');

    var existsSearch = searches.find(function(search){
        return search.text === text;
    });

    if (searches.length < maxItems && !existsSearch)
    {
        yield models.Searches.create({
            type: type,
            text: text,
            UserId: userId
        });
        return;
    }

    assert(searches.length > 0);
    existsSearch = existsSearch || searches[0];
    existsSearch.text = text;
    existsSearch.changed('text', true);
    yield existsSearch.save();
}
module.exports.saveSearchToHistory = saveSearchToHistory;

router.post('/fav/search', koaBody, koaValidate, csrf.middleware, function * ()
{
    this.checkBody('type').notEmpty().isIn(['Subject', 'Account']);
    this.checkBody('text').notEmpty();
    if (this.errors)
    {
        this.body = this.errors;
        return;
    }
    var body = this.request.body;
    yield saveSearchToHistory(this.userId, body.text, body.type);

    this.body = {
        "message": "OK"
    };
});

router.get('/fav/search', koaValidate, function * ()
{
    this.checkQuery('type').notEmpty().isIn(['Subject', 'Account']);
    if (this.errors)
    {
        this.body = this.errors;
        return;
    }
    var searches = yield models.Searches.findAll({
        where: {
            type: this.query.type
        },
        order: [['updatedAt', 'DESC']]
    });

    this.body = searches.map(search => search.toJSON());
});

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};