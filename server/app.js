var koa = require('koa'),
    app = koa(),
    route = require('koa-route'),
    serve = require('koa-static');

app.use(serve('../web/build/'));

app.listen(3000);

console.log('static served');