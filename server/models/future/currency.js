
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Currency", {
        name: DataTypes.STRING(256),
        exchangeRate: DataTypes.DECIMAL(20, 4)
    }, {
        classMethods: {
            associate: function(models) {
            }
        }
    });
};