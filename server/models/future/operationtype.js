
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("OperationType", {
        name: DataTypes.STRING(255)
    }, {
        classMethods: {
            associate: function(models) {
            }
        }
    });
};