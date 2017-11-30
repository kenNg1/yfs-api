'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('student', {
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
        Student.belongsTo(models.user, { foreignKey:{
          name:'userId',
          field:'user_id'
         } , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Student.belongsTo(models.country, { foreignKey:{
          name:'countryId',
          field:'country_id'
         } , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });

        Student.belongsToMany(models.event, {
          // as:"CoursesEnrolled",
          through:models.event_student,
          foreignKey:{
            name:"studentId",
            field:'student_id'
          }
        });
        
      }
    }
  });
  return Student;
};