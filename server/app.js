var config = require('./config'),
    koa = require('koa'),
    co = require('co'),
    route = require('koa-route'),
    session = require('koa-session'),
    csrf = require('koa-csrf'),
    serve = require('koa-static');

var app = koa();

app.keys = [config.get('sessionKey')];
app.use(session(app));
csrf(app);

var models = require("./models");
var subjects = require("./controllers/subjects");
var user = require("./controllers/user");
var auth = require("./controllers/auth");
var pageNotFound = require("./controllers/404");

auth.registerApp(app);

subjects.registerApp(app);
user.registerApp(app);
pageNotFound.registerApp(app);

app.use(serve('../web/build/'));

co(function * (){
    //yield models.sequelize.sync({force: true});
    //
    //var clients = require('./clients.json');
    //
    //for(var i = 0; i < clients.length; i++)
    //{
    //    try
    //    {
    //        var client = yield models.Subject.create(clients[i]);
    //    }
    //    catch(e)
    //    {
    //        console.log(e);
    //    }
    //}

    app.listen(config.get('port'));
    console.log('server listening on port ' + config.get('port'));
});
