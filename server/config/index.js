var nconf = require('nconf'),
    path = require('path');
    ENV = process.env.NODE_ENV || 'develop';
nconf.argv()
    .env()
    .file({file: path.join(__dirname, ENV + '.config.json')});

module.exports = nconf;