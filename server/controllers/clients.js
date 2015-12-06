
var parse = require('co-body');
var router = require('koa-router')();

var models = require("../models");
var baseTable = require('./basetable');
var auth = require('./auth');

var clients = [
    {
        "description": "cillum sint velit reprehenderit id",
        "login": "lou",
        "name": "Lou Osborne"
    },
    {
        "description": "aute nostrud cillum amet proident",
        "login": "santiago",
        "name": "Santiago Sheppard"
    },
    {
        "description": "quis dolore pariatur amet eiusmod",
        "login": "wade",
        "name": "Wade Pittman"
    },
    {
        "description": "ipsum voluptate nostrud proident ea",
        "login": "bennett",
        "name": "Bennett Oneil"
    },
    {
        "description": "enim officia velit est Lorem",
        "login": "viola",
        "name": "Viola Walls"
    },
    {
        "description": "officia deserunt occaecat in reprehenderit",
        "login": "schwartz",
        "name": "Schwartz Malone"
    },
    {
        "description": "anim laborum ullamco ea sit",
        "login": "lacy",
        "name": "Lacy Norris"
    },
    {
        "description": "labore sunt sunt ad officia",
        "login": "luisa",
        "name": "Luisa Benson"
    },
    {
        "description": "laborum sunt amet sunt non",
        "login": "lana",
        "name": "Lana Mercer"
    },
    {
        "description": "elit deserunt officia pariatur eu",
        "login": "cleo",
        "name": "Cleo Gilmore"
    }
];

var render = require('../views');

var clientList = function *list()
{
    console.log(this.baseTable);
    var clients = yield models.Subject.findAll({
        order: this.baseTable.order
    });

    this.body = yield render('clients', {
        columns: {
            'id': '#',
            'login': 'Логин',
            'name': 'Имя',
            'description': 'Описание',
            'accounts': {
                name: 'Счета',
                type: 'link'
            }
        },
        data: clients.map(function(client){
            var data = client.toJSON();
            data['accounts'] = '/accounts/' + client.id;
            return data;
        }),
        baseTable: this.baseTable
    });
};

router.get('/clients', auth.check(), baseTable({
    columns: ['id', 'name', 'description', 'login'],
    defaultOrder: ['id', 'asc']
}), clientList);

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};