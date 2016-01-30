
module.exports.display = function(opts)
{
    opts = opts || {};
    opts.columns = opts.columns || [];

    return function * (next) {

        this.baseTable = {};
        buildOrder(this, opts);
        buildOrderHeaderLinks(this, opts);
        buildLimits(this, opts);
        yield buildSearch(this, opts);

        yield next;
    };
};

var fav = require("./fav");

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
    request.baseTable.order = [opts.defaultOrder];
    request.baseTable.orderColumn = opts.defaultOrder[0];
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

var buildLimits = function(request, opts)
{
    var limit = opts.defLimit || 100;
    var maxLimit = opts.maxLimit || Infinity;
    if (request.query && request.query.limit)
        limit = request.query.limit | 0;
    limit = Math.min(Math.max(1, limit), maxLimit);
    request.baseTable.limit = limit;

    var offset = undefined;
    if (request.query && request.query.offset)
        offset = Math.max(0, request.query.offset | 0);
    request.baseTable.offset = offset;
};

var buildSearch = function * (request, opts)
{
    if (!opts.searchColumns)
        return;
    if (!request.query || !request.query.search)
        return;

    if (opts.saveSearchType)
    {
        yield fav.saveSearchToHistory(request.userId, request.query.search, opts.saveSearchType);
    }

    var search = '%' + request.query.search.toString().replace(/[%_]/g, '') + '%';
    request.baseTable.where = {
        '$or': opts.searchColumns.map(function(columnName){
            var query = {};
            query[columnName] = {
                '$iLike': search
            };
            return query;
        })
    };
};
