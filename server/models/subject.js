
var crypto = require('crypto');
var passwordSalt = require('../config').get('passwordSalt');

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Subject", {
        login: DataTypes.STRING(255),
        password: DataTypes.STRING(255),
        name: DataTypes.STRING(255),
        description: DataTypes.STRING(255)
    }, {
        classMethods: {
            associate: function(models) {
                models.Subject.belongsTo(models.SubjectType);
                models.Subject.belongsTo(models.Subject, {foreignKey: 'ownerId'});
                models.Subject.hasMany(models.Account);
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