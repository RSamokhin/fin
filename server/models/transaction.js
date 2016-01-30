
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Transaction", {
        tax: DataTypes.DECIMAL(20, 4),
        fromSum: DataTypes.DECIMAL(20, 4),
        fixedFormula: DataTypes.STRING(64),
        orderNumber: DataTypes.STRING(64),
        comments: DataTypes.STRING(128),
        submittedAt: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Account, {foreignKey: 'toAccountId'});
                this.belongsTo(models.Subject, {foreignKey: 'fromSubjectId'});
                this.belongsTo(models.Subject, {foreignKey: 'toSubjectId'});
                this.belongsTo(models.TransactionType);
                this.belongsTo(models.Account, {foreignKey: 'fromAccountId'});
                this.belongsTo(models.Operation);
            }
        }
    });
};