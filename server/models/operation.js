
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Operation", {
        date: DataTypes.DATE,
        type: DataTypes.STRING(20),
        orderNumber: DataTypes.STRING(64),
        tax: DataTypes.DECIMAL,
        paid: DataTypes.DECIMAL,
        mustPay: DataTypes.DECIMAL,
        given: DataTypes.DECIMAL
    }, {
        classMethods: {
            associate: function(models) {
                models.Operation.belongsTo(models.Account, {foreignKey: 'fromAccountId'});
                models.Operation.belongsTo(models.Account, {foreignKey: 'toAccountId'});
            }
        }
    });
};