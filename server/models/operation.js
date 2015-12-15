
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Operation", {
        date: DataTypes.DATE,
        type: DataTypes.STRING(20),
        orderNumber: DataTypes.STRING(64),
        tax: DataTypes.DECIMAL(20, 2),
        paid: DataTypes.DECIMAL(20, 2),
        mustPay: DataTypes.DECIMAL(20, 2),
        given: DataTypes.DECIMAL(20, 2)
    }, {
        classMethods: {
            associate: function(models) {
                models.Operation.belongsTo(models.Account, {foreignKey: 'fromAccountId'});
                models.Operation.belongsTo(models.Account, {foreignKey: 'toAccountId'});
            }
        }
    });
};