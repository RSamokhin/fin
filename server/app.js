var config = require('./config'),
    koa = require('koa'),
    path = require('path'),
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
var fav = require("./controllers/fav");
var currency = require("./controllers/currency");

auth.registerApp(app);

subjects.registerApp(app);
user.registerApp(app);
pageNotFound.registerApp(app);
currency.registerApp(app);
fav.registerApp(app);

app.use(serve('../web/build/'));

co(function * (){
    yield models.sequelize.sync();

    // yield restoreDatabase();

    app.listen(config.get('port'));
    console.log('server listening on port ' + config.get('port'));
});


function * restoreDatabase()
{
    return new Promise(function(resolve, reject){
        var cfg = config.get('database');
        var cmdLine = [
            'psql',
            '-d' + cfg.database,
            '-f' + path.join(__dirname, '../db/data.sql'),
            '-h' + cfg.server,
            '-U' + cfg.user
        ].join(' ');
        var exec = require('child_process').exec;
        exec(cmdLine, {
            env: {
                PGPASSWORD: cfg.password
            }
        }, (error, stdout) => {
            if (error)
                return reject(error);
            resolve(stdout)
        });
    });
};