
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Account", {
        name: DataTypes.STRING(256),
        description: DataTypes.STRING(512),
        ammount: DataTypes.DECIMAL(20, 4)
    }, {
        classMethods: {
            associate: function(models) {
                models.Account.belongsTo(models.AccountType);
                models.Account.belongsTo(models.Currency);
            }
        }
    });
};