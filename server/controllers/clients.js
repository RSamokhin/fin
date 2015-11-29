
var parse = require('co-body');
var route = require('koa-route');
var clients = [
    {
        "index": 0,
        "name": "Kelli Snyder",
        "description": "Irure excepteur elit consequat et Lorem laborum cupidatat duis ullamco ad cupidatat commodo consequat consequat. Occaecat adipisicing minim voluptate Lorem. Culpa dolore qui quis in est."
    },
    {
        "index": 1,
        "name": "Campbell Romero",
        "description": "Id proident consequat occaecat esse esse reprehenderit exercitation pariatur culpa commodo dolor. Dolore culpa consequat esse amet minim. Officia incididunt labore est do adipisicing sunt adipisicing deserunt quis Lorem velit aliquip fugiat est. Enim Lorem dolore ipsum irure aliquip nisi. Consequat fugiat laborum nulla consequat quis nisi labore eiusmod aliquip ea est non."
    },
    {
        "index": 2,
        "name": "Hunter Allen",
        "description": "Consequat aliquip ea consequat occaecat incididunt Lorem nostrud tempor. Irure proident qui id quis non aliqua sunt dolore laborum cupidatat Lorem adipisicing amet minim. Excepteur enim veniam excepteur irure cupidatat exercitation deserunt dolore sunt exercitation laborum."
    },
    {
        "index": 3,
        "name": "Calhoun Leon",
        "description": "Aliquip ex Lorem nulla anim. Ex eu id amet quis duis eu sint do pariatur exercitation aliquip. Ex esse non quis ut cillum anim qui sint."
    },
    {
        "index": 4,
        "name": "Mays Dickerson",
        "description": "Tempor cillum eu culpa Lorem consectetur sit cillum. Ex quis in sint nisi officia cillum. Lorem sunt exercitation sit sit labore eu adipisicing esse. Nisi do ad incididunt reprehenderit laborum ad voluptate minim exercitation exercitation dolore aute pariatur. Minim ut adipisicing exercitation aliquip do duis laboris non consectetur est consectetur. Mollit esse labore eu dolore consectetur quis dolor et."
    }
];

var render = require('../views');

var clientList = function *list() {
  this.body = yield render('index');
};

module.exports.register = function(app)
{
    app.use(route.get('/clients', clientList));
};