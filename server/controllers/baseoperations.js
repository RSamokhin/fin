
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
    registerRoutes: function(router)
    {
        assert(this.model);
        assert(this.path);
        router.get(this.path, makeQueryFunc(this.getList, this));
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
    }
};
