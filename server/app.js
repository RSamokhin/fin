var config = require('./config'),
    koa = require('koa'),
    app = koa(),
    route = require('koa-route'),
    serve = require('koa-static');

app.use(serve('../web/build/'));

app.listen(config.get('port'));

console.log('static served');