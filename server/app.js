var config = require('./config'),
    koa = require('koa'),
    co = require('co'),
    app = koa(),
    route = require('koa-route'),
    serve = require('koa-static');

app.use(serve('../web/build/'));

var models = require("./models");

co(function * (){
    yield models.sequelize.sync({force: true});
    //app.listen(config.get('port'));
    console.log('server listening on port ' + config.get('port'));
});
