
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Operation", {
        rootTransa

    }, {
        classMethods: {
            associate: function(models) {
                models.Operation.belongsTo(models.Account, {foreignKey: 'fromAccountId'});
                models.Operation.belongsTo(models.Account, {foreignKey: 'toAccountId'});
            }
        }
    });
};