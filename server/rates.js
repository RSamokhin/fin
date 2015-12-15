
var co = require('co');
var request = require('request');
var moment = require('moment');
var assert = require('assert');

var config = require('./config');
var models = require("./models");

function * updateCurrenciesRates()
{
    yield models.sequelize.sync();
    var currencies = yield loadCurrency();

    for(var i = 0; i < currencies.length; i++)
    {
        yield updateCurrrencyRate(currencies[i]);
    }
}

function * loadCurrency ()
{
    var currencies = yield models.Currency.findAll();
    return currencies;
}

function * updateCurrrencyRate(currency)
{
    var lastDate = yield getLastUpdateDate(currency);
    lastDate = lastDate.add(1, 'days');
    var currDate = moment();
    var duration = moment.duration(currDate.diff(lastDate));
    var days = duration.asDays();
    if (days < 1)
        return;
    var rates = yield getCBRRates(currency, lastDate, currDate);
    yield insertNewRates(currency, rates);
}

function * getLastUpdateDate(currency)
{
    var lastDate = yield models.Rates.max('date', { where: { currencyId: currency.id } });
    if (lastDate != null)
        return moment(lastDate);
    return moment().subtract(3, 'days');
}

function * getCBRRates(currency, fromDate, toDate)
{
    var url = 'http://www.cbr.ru/scripts/XML_dynamic.asp?date_req1=' +
        fromDate.format('DD/MM/YYYY') + '&date_req2=' + toDate.format('DD/MM/YYYY') +
        '&VAL_NM_RQ=' + currency.id;

    var xml = yield loadXML(url);
    var records = yield extractRecords(xml);
    return records.map(function(record){
        assert(record['$']);
        assert(record['$']['Id'] === currency.id);
        var date = record['$']['Date'];
        var value = record['Value'];
        var nominal = record['Nominal'];
        assert(value.length === 1);
        assert(nominal.length === 1);
        return {
            date: moment(date, 'DD.MM.YYYY').toDate(),
            value: parseFloat(value[0].replace(',', '.')),
            nominal: parseInt(nominal[0].replace(',', '.'))
        }
    });
}

function loadXML(url)
{
    return new Promise(function(resolve, reject){
        request(url, function(error, response, body){
            if (!error && response.statusCode == 200)
            {
                resolve(body);
            }
            else
            {
                reject(body || error);
            }
        });
    })
}
function extractRecords(xml)
{
    return new Promise(function(resolve, reject){
        var parseString = require('xml2js').parseString;
        parseString(xml, function (err, result)
        {
            if (err)
            {
                reject(err);
                return;
            }
            assert(result.ValCurs);
            var records = result.ValCurs.Record;
            resolve(records || []);
        });
    })
}

function * insertNewRates(currency, rates)
{
    for(var i = 0; i < rates.length; i++)
    {
        var rate = yield models.Rates.create({
            date: rates[i].date,
            value: rates[i].value,
            nominal: rates[i].nominal,
            currencyId: currency.id
        });
    }
}

if (module.parent)
{
    module.exports = updateCurrenciesRates;
}
else
{
    co(function * (){
        try
        {
            yield updateCurrenciesRates();
        }
        catch(e)
        {
            console.log(e);
        }
    });
}
