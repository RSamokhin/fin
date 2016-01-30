
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Account", {
        name: DataTypes.STRING(256),
        description: DataTypes.STRING(512),
        amount: {type: DataTypes.DECIMAL(20, 2), defaultValue: 0}
    }, {
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Subject);
                this.belongsTo(models.Currency);
            }
        }
    });
};