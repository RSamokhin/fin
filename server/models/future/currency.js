
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Currency", {
        name: DataTypes.STRING(256),
        exchangeRate: DataTypes.DECIMAL
    }, {
        classMethods: {
            associate: function(models) {
            }
        }
    });
};