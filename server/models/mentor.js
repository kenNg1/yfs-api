'use strict';
module.exports = (sequelize, DataTypes) => {
  var Mentor = sequelize.define('mentor', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    companyName: DataTypes.STRING,
    industry: DataTypes.STRING,
    title: DataTypes.STRING,
    participation: DataTypes.ARRAY(DataTypes.STRING),
    about: DataTypes.TEXT,
    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Mentor.belongsTo(models.user, { foreignKey:{
          name:'userId',
          field:'user_id'
         } , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Mentor.belongsTo(models.country, { foreignKey: {
          name:'countryId',
          field:'country_id'
         } , onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Mentor.belongsTo(models.city, { foreignKey:{
          name:'cityId',
          field:'city_id'
        }, onDelete: 'RESTRICT', onUpdate: 'CASCADE' });

        Mentor.belongsToMany(models.event, {
          // as:"CoursesEnrolled",
          through:models.event_mentor,
          foreignKey:{
            name:"mentorId",
            field:'mentor_id'
          }
        });      
         
      }
    }
  });
  return Mentor;
};