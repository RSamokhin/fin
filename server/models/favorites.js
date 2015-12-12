
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Favorites", {
        order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        classMethods: {
            associate: function(models) {
                models.Favorites.belongsTo(models.Subject);
                models.Favorites.belongsTo(models.User);
            }
        }
    });
};