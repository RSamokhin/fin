
var assert = require('assert');

var koaBody = require('koa-body')();
var koaValidate = require('koa-validate')();
var csrf = require('koa-csrf');

var makeQueryFunc = function(func, obj)
{
    return function * (){
        var args = [this];
        args.push.apply(args, arguments);
        obj.req = this;
        yield func.apply(obj, args);
    };
};

module.exports = {
    req: null,
    model: null,
    path: '',
    searchColumns: null,
    registerRoutes: function(router)
    {
        assert(this.model);
        assert(this.path);
        router.get(this.path, makeQueryFunc(this.getList, this));
        router.get(this.path + '/datatable', makeQueryFunc(this.dataTable, this));
        router.get(this.path + '/:id', makeQueryFunc(this.getOne, this));
        router.del(this.path + '/:id', makeQueryFunc(this.deleteOne, this));
        router.post(this.path, koaBody, koaValidate, csrf.middleware, makeQueryFunc(this.add, this));
        router.post(this.path + '/:id', koaBody, koaValidate, csrf.middleware, makeQueryFunc(this.update, this));
    },
    getList: function * (req)
    {
        var records = yield this.model.findAll();
        req.body = records.map(record => record.toJSON());
    },
    getOne: function * (req)
    {
        var record = yield this.model.findById(this.req.params.id);
        if (record)
            this.req.body = record.toJSON();
    },
    deleteOne: function * (req)
    {
        var record = yield this.model.findById(this.req.params.id);
        if (record)
        {
            yield record.destroy();
            this.req.body = record.toJSON();
        }
    },
    add: function * (req)
    {
        yield this.validateAdd(req);
        if (this.req.errors)
        {
            this.req.body = {
                errors: this.req.errors
            };
            return;
        }
        var data = this.extractAddData(this.req.request.body);
        console.log(data);
        var record = yield this.model.create(data);
        this.req.body = record.toJSON();
    },
    update: function * (req)
    {
        var record = yield this.model.findById(this.req.params.id);
        if (!record)
            return;

        yield this.validateUpdate(req);
        if (this.req.errors)
        {
            this.req.body = {
                errors: this.req.errors
            };
            return;
        }
        var data = this.extractUpdateData(this.req.request.body);
        console.log(data);
        for(var key in data)
        {
            if (!Object.prototype.hasOwnProperty.call(data, key))
                continue;
            record[key] = data[key];
        }
        yield record.save();
        this.req.body = record.toJSON();
    },
    validateAdd: function * ()
    {
    },
    validateUpdate: function * ()
    {
        return yield this.validateAdd();
    },
    validateRefExist: function * (redModel, fieldName, id)
    {
        var ref = yield redModel.findById(id);
        if (!ref)
        {
            var error = {};
            error[fieldName] = 'Not exist ' + fieldName;
            (this.req.errors || (this.req.errors = [])).push(error);
        }
    },
    extractAddData: function(body)
    {
        return body;
    },
    extractUpdateData: function(body)
    {
        return this.extractAddData(body);
    },
    dataTable: function * ()
    {
        var query = this.req.query || {};
        var draw = (query.draw | 0) || 0;
        var totalRows = yield this.model.count();
        var dbQuery = {};
        this.buildLimit(query, dbQuery);
        this.buildOrder(query, dbQuery);
        this.buildSearch(query, dbQuery);
        //console.log(query, dbQuery);
        var rows = yield this.model.findAndCountAll(dbQuery);
        this.req.body = {
            draw: draw,
            recordsTotal: totalRows,
            recordsFiltered: rows.count,
            data: rows.rows.map(function(row)
            {
                var data = row.toJSON();
                data['DT_RowData'] = {
                    'id': row.id
                };
                return data;
            })
        };
    },
    buildLimit: function(query, dbQuery)
    {
        var length = (query.length | 0) || 0;
        if (query.start !== undefined && length > 0)
        {
            dbQuery.limit = length;
            dbQuery.offset = Math.max(query.start | 0, 0);
        }
    },
    buildOrder: function(query, dbQuery)
    {
        if (typeof query.order !== 'object' || !(query.order instanceof Array) || query.order.length <= 0)
            return;

        var columns = query.columns || [];
        dbQuery.order = [];
        query.order.forEach(function(order){
            var column = order.column | 0;
            if (column < 0 || column >= columns.length)
                return;
            var dir = order.dir;
            if (dir !== 'desc' && dir !== 'asc')
                return;
            var attr = columns[column];
            if (!this.model.attributes.hasOwnProperty(attr.data))
                return;
            dbQuery.order.push([attr.data, dir]);
        }.bind(this));
    },
    buildSearch: function(query, dbQuery)
    {
        var columns = this.filterValidColumns(query);
        var globalSearch = this.buildGlobalSearch(query, columns);
        var columnsSearch = this.buildColumnSearch(query, columns);
        if (columnsSearch.length > 0)
        {
            if (globalSearch.length > 0)
            {
                columnsSearch.push({
                    '$or': globalSearch
                });
            }
            dbQuery.where = {
                '$and': columnsSearch
            };
        }
        else if (globalSearch.length > 0)
        {
            dbQuery.where = {
                '$or': globalSearch
            };
        }
    },
    filterValidColumns: function(query)
    {
        var columns = query.columns || [];
        return columns.filter(function(column)
        {
            if (column.searchable !== 'true')
                return false;
            if (!this.model.attributes.hasOwnProperty(column.data))
                return false;
            if (this.searchColumns !== null && this.searchColumns.indexOf(column.data) === -1)
                return false;
            return true;
        }.bind(this));
    },
    buildGlobalSearch: function(query, columns)
    {
        if (!query.search || !query.search.value)
            return [];
        return columns.map(function(column)
        {
            var columnQuery = {};
            columnQuery[column.data] = {
                '$iLike': '%' + query.search.value.replace(/[%_]/g, '') + '%'
            };
            return columnQuery;
        }.bind(this));
    },
    buildColumnSearch: function(query, columns)
    {
        return columns.filter(function(column)
        {
            if (!column.search || !column.search.value)
                return false;
            return true;
        }.bind(this)).map(function(column)
        {
            var columnQuery = {};
            columnQuery[column.data] = {
                '$iLike': '%' + column.search.value.replace(/[%_]/g, '') + '%'
            };
            return columnQuery;
        }.bind(this));
    }
};
