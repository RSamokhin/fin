
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("SubjectType", {
        name: DataTypes.STRING(255)
    }, {
        classMethods: {
            associate: function(models) {
            }
        }
    });
};