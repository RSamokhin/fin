

var router = require('koa-router')();

var models = require("../models");

var render = require('../views');

router.get('/currency/rates', function * (){

    var lastDates = yield models.Rates.findAll({
        attributes: [
            'currencyId',
            [models.sequelize.fn('max', models.sequelize.col('date')), 'date']
        ],
        group: ['currencyId']
    });

    var result = {};
    for(var i = 0; i < lastDates.length; i++)
    {
        var rates = yield models.Rates.findAll({
            order: [['date', 'desc']],
            limit: 2,
            where: {
                currencyId: lastDates[i].currencyId
            },
            include: [models.Currency]
        });
        rates.forEach(function(rate, i){
            if (!result[rate.Currency.id])
            {
                assert(i === 0);
                result[rate.Currency.id] = {
                    id: rate.Currency.id,
                    name: rate.Currency.name,
                    current: rate.value,
                    prev: null
                }
            }
            else
            {
                assert(i === 1);
                result[rate.Currency.id].prev = rate.value;
            }
        });
    }

    this.body = result;
});

module.exports.registerApp = function(app)
{
    app
        .use(router.routes())
        .use(router.allowedMethods());
};
