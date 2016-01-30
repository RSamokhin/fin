
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Compensation", {
    }, {
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Transaction, {foreignKey: 'transactionInitiatorId'});
                this.belongsTo(models.Transaction, {foreignKey: 'transactionCompensatorID'});
            }
        }
    });
};