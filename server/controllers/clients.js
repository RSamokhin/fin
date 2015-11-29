
var parse = require('co-body');
var router = require('koa-router')();

var baseTable = require('./basetable');

var clients = [
    {
        "index": 0,
        "name": "Kelli Snyder",
        "description": "Irure excepteur elit consequat et ."
    },
    {
        "index": 1,
        "name": "Campbell Romero",
        "description": "Id proident consequat occaecat esse esse reprehenderit."
    },
    {
        "index": 2,
        "name": "Hunter Allen",
        "description": "Consequat aliquip ea consequat occaecat incididunt ."
    },
    {
        "index": 3,
        "name": "Calhoun Leon",
        "description": "Aliquip ex Lorem nulla anim. Ex eu id amet quis duis ."
    },
    {
        "index": 4,
        "name": "Mays Dickerson",
        "description": "Tempor cillum eu culpa Lorem consectetur sit cillum. ."
    }
];

var render = require('../views');

var clientList = function *list()
{
    console.log(this.baseTable);
    this.body = yield render('clients', {
        columns: {
            'id': '#',
            'name': 'Имя',
            'description': 'Описание'
        },
        data: clients,
        baseTable: this.baseTable
    });
};

router.get('/clients', baseTable({
    columns: ['id', 'name', 'description']
}), clientList);

module.exports.register = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};