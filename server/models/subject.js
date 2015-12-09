
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Subject", {
        name: DataTypes.STRING(255),
        description: DataTypes.STRING(255),
        INN: DataTypes.STRING(12),
        KPP: DataTypes.STRING(30),
        type: DataTypes.STRING(30),
        isSystem: DataTypes.BOOLEAN()
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