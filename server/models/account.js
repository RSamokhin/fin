
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Account", {
        name: DataTypes.STRING(256),
        description: DataTypes.STRING(512),
        ammount: DataTypes.DECIMAL(20, 2),
        currency: DataTypes.STRING(20)
    }, {
        classMethods: {
            associate: function(models) {
                models.Account.belongsTo(models.Subject);
            }
        }
    });
};