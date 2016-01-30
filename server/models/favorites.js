
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Favorites", {
        order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Subject);
                this.belongsTo(models.User);
            }
        }
    });
};