
var crypto = require('crypto');
var passwordSalt = require('../config').get('passwordSalt');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("User", {
        login: DataTypes.STRING(255),
        password: DataTypes.STRING(255),
        firstName: DataTypes.STRING(255),
        lastName: DataTypes.STRING(255),
        phone: DataTypes.STRING(255),
        settings: DataTypes.JSONB()
    }, {
        classMethods: {
            associate: function(models) {
            }
        },
        instanceMethods: {
            encryptPassword: function(password) {
                if (!password)
                    return '';

                try
                {
                    return crypto.createHmac('sha1', passwordSalt).update(password).digest('hex');
                }
                catch (err)
                {
                    return '';
                }
            }
        }
    });
};