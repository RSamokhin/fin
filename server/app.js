var config = require('./config'),
    koa = require('koa'),
    app = koa(),
    route = require('koa-route'),
    serve = require('koa-static'),
    IO = require( 'koa-socket'),
    io = new IO(),
    Sequelize = require('sequelize');

app.use(serve('../web/build/'));




io.attach(app);

io.on('tst', function( data){
    console.log(data);
});




var sequelize = new Sequelize('fin', 'fin', 'Qaz12345', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var Users = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    login: Sequelize.STRING,
    password: Sequelize.STRING,
    fname: Sequelize.STRING,
    lname: Sequelize.STRING
}, {
    timestamps: false
});

Users.findAll().then(function(data) {
   data.forEach(function(user) {
       console.log(JSON.stringify(user));
   })

});



app.server.listen(config.get('port'));

console.log('static served');