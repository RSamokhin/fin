
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Subject", {
        name: DataTypes.STRING(255),
        description: DataTypes.STRING(255)
    }, {
        classMethods: {
            associate: function(models) {
                models.Subject.belongsTo(models.SubjectType);
                models.Subject.belongsTo(models.Subject, {foreignKey: 'ownerId'});
                models.Subject.hasMany(models.Account);
            }
        }
    });
};