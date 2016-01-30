
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Searches", {
        type: DataTypes.STRING(20),
        text: DataTypes.STRING(256)
    }, {
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.User);
            }
        }
    });
};