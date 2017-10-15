'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    nickname: DataTypes.STRING,
    image: DataTypes.STRING,
    schoolName: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    mobileNumber: DataTypes.STRING,
    googleSlides: DataTypes.STRING,
    googleDocs: DataTypes.STRING,
    microsoftOffice: DataTypes.STRING,
    willGoUni: DataTypes.BOOLEAN,
    desiredUniversity: DataTypes.STRING,
    graduationPlans: DataTypes.TEXT,
    heardThrough: DataTypes.STRING   
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.belongsTo(models.User, { foreignKey: 'userId' , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Student.belongsTo(models.Country, { foreignKey: 'countryId' , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      }
    }
  });
  return Student;
};