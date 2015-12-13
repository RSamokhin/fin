
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Account", {
        name: DataTypes.STRING(256),
        description: DataTypes.STRING(512),
        ammount: DataTypes.DECIMAL,
        currency: DataTypes.STRING(20)
    }, {
        classMethods: {
            associate: function(models) {
                models.Account.belongsTo(models.Subject);
            }
        }
    });
};