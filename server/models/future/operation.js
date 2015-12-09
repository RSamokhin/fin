
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Operation", {
        ammountFrom: DataTypes.DECIMAL,
        ammountTo: DataTypes.DECIMAL,
        tax: DataTypes.DECIMAL,
        exchangeRate: DataTypes.DECIMAL,
        description: DataTypes.STRING(512)
    }, {
        classMethods: {
            associate: function(models) {
                models.Operation.belongsTo(models.OperationType);
                models.Operation.belongsTo(models.Account, {foreignKey: 'fromAccountId'});
                models.Operation.belongsTo(models.Account, {foreignKey: 'toAccountId'});
            }
        }
    });
};