var parse = require('co-body');
var jwt = require('koa-jwt');
var router = require('koa-router')();
var koaBody = require('koa-body')();
var csrf = require('koa-csrf');
var koaValidate = require('koa-validate')();

var config = require('../config').get('jwt');
var models = require("../models");
var render = require('../views');

module.exports.check = function (opt_redirect) {
    return function * (next) {

        if (this.request.url.match(/^\/(login.html)|(js\/)|(fonts\/)|(img\/)|(css\/)/))
        {
            yield next;
            return;
        }

        var token = this.cookies.get(config.cookie);
        try
        {
            var data = yield jwt.verify(token, config.secret);
            this.userId = data['userId'];
        }
        catch(e)
        {
            if (opt_redirect)
                this.response.redirect('/login.html?redirect=' + encodeURIComponent(this.request.url));
            else
                this.response.redirect('/login.html');
            return;
        }
        yield next;
    };
};

router.get('/logout.html', function * (){
    this.cookies.set(config.cookie);
    this.response.redirect('/');
});
router.get('/login.html', function * (){

    var errors = [];
    if (this.session.errors)
    {
        errors = this.session.errors;
        delete this.session.errors;
    }
    this.body = yield render('login', {
        csrf: this.csrf,
        errors: errors
    });
});
router.post('/login.html', koaBody, koaValidate, csrf.middleware, function * (){
    this.checkBody('login').notEmpty();
    this.checkBody('password').notEmpty();

    if (this.errors)
    {
        this.response.redirect('/login.html');
        this.session.errors = this.errors;
        return;
    }

    var user = yield models.User.findOne({
        where: {
            login: this.request.body.login
        }
    });
    if (user === null || user.encryptPassword(this.request.body.password) !== user.password)
    {
        this.session.errors = ['User or passwrod incorrect!'];
        this.response.redirect('/login.html');
        return;
    }

    this.cookies.set(config.cookie, jwt.sign({
        userId: user.id
    }, config.secret));

    this.response.redirect('/');
});

var addCSRFCookie = function * (next)
{
    this.cookies.set('csrfToken', this.csrf, {
        httpOnly: false
    });
    yield next;
};

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods())
        .use(module.exports.check())
        .use(addCSRFCookie);
};