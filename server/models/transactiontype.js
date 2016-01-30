
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("TransactionType", {
        name: DataTypes.STRING(255),
        formula: DataTypes.STRING(255),
        defaultTax: DataTypes.DECIMAL(20, 4)
    }, {
        classMethods: {
            associate: function(models) {
            }
        }
    });
};