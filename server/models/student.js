'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    country: DataTypes.STRING,
    nickname: DataTypes.STRING,
    image: DataTypes.STRING,
    contact: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.belongsTo(models.user, { foreignKey: 'user_id' , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      }
    }
  });
  return Student;
};