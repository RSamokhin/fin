var config = require('./config'),
    koa = require('koa'),
    app = koa(),
    route = require('koa-route'),
    serve = require('koa-static'),
    IO = require( 'koa-socket'),
    io = new IO();

app.use(serve('../web/build/'));

io.attach(app);

io.on('chat.message', function( data){
    console.log(data);
});

app.server.listen(config.get('port'));

console.log('static served');