
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Searches", {
        type: DataTypes.STRING(20),
        text: DataTypes.STRING(256)
    }, {
        classMethods: {
            associate: function(models) {
                models.Searches.belongsTo(models.User);
            }
        }
    });
};