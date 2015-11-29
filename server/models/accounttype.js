
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("AccountType", {
        name: DataTypes.STRING(255)
    }, {
        classMethods: {
            associate: function(models) {
            }
        }
    });
};