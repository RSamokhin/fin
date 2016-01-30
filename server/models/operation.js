
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Operation", {
        description: DataTypes.STRING(255)
    }, {
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Transaction, {foreignKey: 'rootTransactionId', constraints: false});
            }
        }
    });
};