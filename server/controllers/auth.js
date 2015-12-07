var parse = require('co-body');
var jwt = require('koa-jwt');
var router = require('koa-router')();
var koaBody = require('koa-body')();
var koaValidate = require('koa-validate')();

var config = require('../config').get('jwt');
var models = require("../models");
var render = require('../views');

module.exports.check = function (opt_redirect) {
    return function * (next) {
        var token = this.cookies.get(config.cookie);
        try
        {
            yield jwt.verify(token, config.secret);
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
    this.body = yield render('login');
});
router.post('/login.html', koaBody, koaValidate, function * (){
    this.checkBody('login').notEmpty();
    this.checkBody('password').notEmpty();

    if (this.errors)
    {
        this.response.redirect('/login.html');
        // TODO this.errors
        return;
    }

    var subject = yield models.Subject.findOne({
        where: {
            login: this.request.body.login
        }
    });
    if (subject === null || subject.encryptPassword(this.request.body.password) !== subject.password)
    {
        this.response.redirect('/login.html');
        return;
    }

    this.cookies.set(config.cookie, jwt.sign({
        userId: subject.id
    }, config.secret));

    this.response.redirect('/');
});

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods())
		.use(module.exports.check());
};