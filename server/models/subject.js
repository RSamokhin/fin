
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Subject", {
        name: DataTypes.STRING(255),
        description: DataTypes.STRING(),
        INN: DataTypes.STRING(12),
        KPP: DataTypes.STRING(9),
        type: {
            type: DataTypes.STRING(30),
            validate: {
                isIn: [['Компания', 'ИП', 'Физ-лицо']]
            }
        },
        isSystem: {type: DataTypes.BOOLEAN(), defaultValue: false}
    }, {
        classMethods: {
            associate: function(models) {
                //models.Subject.belongsTo(models.Subject, {foreignKey: 'ownerId'});
                //models.Subject.hasMany(models.Account);
            }
        },
        instanceMethods: {
        }
    });
};