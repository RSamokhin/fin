
var router = require('koa-router')();
var koaBody = require('koa-body')();
var koaValidate = require('koa-validate')();

var models = require("../models");
var render = require('../views');

function * loadUser(next)
{
    var user = yield models.User.findById(this.userId);
    if (!user)
    {
        this.response.redirect('/404');
        return;
    }
    this.user = user;
    yield next;
}
module.exports.loadUser = loadUser;

router.get('/user', loadUser, function * (){
    this.body = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        phone: this.user.firstName
    };
});
router.post('/user', koaBody, koaValidate, loadUser, function * (){
    this.checkBody('firstName').notEmpty();
    this.checkBody('lastName').notEmpty();
    this.checkBody('phone').notEmpty();
    this.checkBody('password').optional();

    if (this.errors)
    {
        this.session.errors = this.errors;
        this.response.redirect('/user');
        return;
    }

    this.user.firstName = this.request.body.firstName;
    this.user.lastName = this.request.body.lastName;
    this.user.phone = this.request.body.phone;

    if (this.request.body.password)
    {
        this.user.password = this.user.encryptPassword(this.request.body.password);
    }

    yield this.user.save();

    this.response.redirect('/user');
});

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};

module.exports.loadUser = loadUser;