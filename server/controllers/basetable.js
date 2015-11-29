
module.exports = function(opts)
{
    opts = opts || {};
    opts.columns = opts.columns || [];

    return function * (next) {

        this.baseTable = {};
        buildOrder(this, opts);
        buildOrderHeaderLinks(this, opts);

        yield next;
    };
};

var buildOrderHeaderLinks = function(request, opts)
{
    var currentColumn = null;
    var nextDir = null;
    var currentOrder = request.baseTable.order;
    if (request.baseTable.orderColumn !== null)
    {
        currentColumn = currentOrder[0][0];
        nextDir = currentOrder[0][1];
    }

    request.baseTable.orderLinks = opts.columns.reduce(function(object, column){
        if (currentColumn === null)
        {
            currentColumn = column;
            nextDir = 'asc';
        }
        object[column] = [
            column,
            nextDir === 'asc' || currentColumn !== column ? 'desc' : 'asc'
        ].join(',');
        return object;
    }, {});
};
var buildOrder = function(request, opts)
{
    request.baseTable.order = [];
    request.baseTable.orderColumn = null;
    var queryOrder = (request.query && request.query.order) || '';
    var order = queryOrder.toString().split(',');
    if (order.length <= 0)
        return;
    var column = order[0].toString();
    var dir = (order[1] || '').toString().toLowerCase();
    if (opts.columns.indexOf(column) === -1)
        return;

    request.baseTable.orderColumn = column;
    request.baseTable.order = [[
        column,
        dir !== 'desc' ? 'asc' : 'desc'
    ]];
};

