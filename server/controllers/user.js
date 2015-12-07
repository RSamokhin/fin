
var router = require('koa-router')();
var koaBody = require('koa-body')();
var koaValidate = require('koa-validate')();

var models = require("../models");
var render = require('../views');

function * loadUser(next)
{
    var user = yield models.Subject.findOne({
        where: {
            id: this.userId
        }
    });
    if (!user)
    {
        this.response.redirect('/404');
        return;
    }
    this.user = user;
    yield next;
}

router.get('/user', loadUser, function * (){
    this.body = yield render('user', {
        name: this.user.name,
        description: this.user.description
    });
});
router.post('/user', koaBody, koaValidate, loadUser, function * (){
    this.checkBody('name').notEmpty();
    this.checkBody('description').notEmpty();
    this.checkBody('password').optional();

    this.user.name = this.request.body.name;
    this.user.description = this.request.body.description;

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