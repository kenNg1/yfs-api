'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mentor = sequelize.define('Mentor', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    companyName: DataTypes.STRING,
    industry: DataTypes.STRING,
    title: DataTypes.STRING,
    participation: DataTypes.STRING,
    about: DataTypes.TEXT,
    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Mentor.belongsTo(models.User, { foreignKey: 'userId' , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Mentor.belongsTo(models.Country, { foreignKey: 'countryId' , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Mentor.belongsTo(models.City, { foreignKey: 'cityId' , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Mentor.belongsToMany(models.Event, {
          // as:"CoursesEnrolled",
          through:"EventMentors",
          foreignKey: "mentorId",
          
        });       
      }
    }
  });
  return Mentor;
};