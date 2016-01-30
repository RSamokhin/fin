var config = require('./config'),
    koa = require('koa'),
    path = require('path'),
    co = require('co'),
    route = require('koa-route'),
    session = require('koa-session'),
    csrf = require('koa-csrf'),
    koaQs = require('koa-qs'),
    serve = require('koa-static');

var app = koa();

app.keys = [config.get('sessionKey')];
app.use(session(app));
csrf(app);
koaQs(app);

var models = require("./models");
var subjects = require("./controllers/subjects");
var accounts = require("./controllers/accounts");
var user = require("./controllers/user");
var auth = require("./controllers/auth");
var pageNotFound = require("./controllers/404");
var fav = require("./controllers/fav");
var currency = require("./controllers/currency");
var operations = require("./controllers/operations");
var transactions = require("./controllers/transactions");
var transactiontypes = require("./controllers/transactiontypes");

auth.registerApp(app);

subjects.registerApp(app);
accounts.registerApp(app);
user.registerApp(app);
pageNotFound.registerApp(app);
currency.registerApp(app);
operations.registerApp(app);
transactions.registerApp(app);
transactiontypes.registerApp(app);
fav.registerApp(app);

app.use(serve('../web/build/'));

co(function * (){

    try
    {
        yield models.sequelize.sync();
    //    yield restoreDatabase();
    }
    catch(e)
    {
        console.log('Database error!');
        console.log(e.message);
        console.log(e);
        return;
    }

    app.listen(config.get('port'));
    console.log('server listening on port ' + config.get('port'));
});


function * restoreDatabase()
{
    return new Promise(function(resolve, reject){
        var cfg = config.get('database');
        var exec = require('child_process').exec;
        exec(path.join(__dirname, '../tools/restoreData.sh'), {
            env: {
                PGPASSWORD: cfg.password
            }
        }, (error, stdout) => {
            if (error)
                return reject(error);
            resolve(stdout)
        });
    });
}