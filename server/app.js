var config = require('./config'),
    koa = require('koa'),
    co = require('co'),
    app = koa(),
    route = require('koa-route'),
    serve = require('koa-static');

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
