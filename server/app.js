var config = require('./config'),
    koa = require('koa'),
    co = require('co'),
    app = koa(),
    route = require('koa-route'),
    serve = require('koa-static');

var models = require("./models");
var clients = require("./controllers/clients");
var user = require("./controllers/user");
var auth = require("./controllers/auth");
var pageNotFound = require("./controllers/404");

app.use(serve('../web/build/'));

auth.registerApp(app);

clients.registerApp(app);
user.registerApp(app);
pageNotFound.registerApp(app);

co(function * (){
    //yield models.sequelize.sync({force: true});
    app.listen(config.get('port'));
    console.log('server listening on port ' + config.get('port'));
});
