
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Currency", {
        id: {
            type: DataTypes.STRING(6),
            primaryKey: true,
            autoIncrement: false
        },
        name: DataTypes.STRING(32),
        nominal: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
            }
        }
    });
};