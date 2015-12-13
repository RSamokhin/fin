
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Rates", {
        date: DataTypes.DATE,
        value: DataTypes.DECIMAL,
        nominal: DataTypes.DECIMAL
    }, {
        classMethods: {
            associate: function(models) {
                models.Rates.belongsTo(models.Currency, {foreignKey: 'currencyId'});
            }
        },
        indexes: [
            {
                unique: true,
                primaryKey: true,
                fields: ['date', 'currencyId']
            }
        ]
    });
};