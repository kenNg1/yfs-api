
'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventMentor = sequelize.define('EventMentor', {
    role: DataTypes.STRING,
    accepted: DataTypes.BOOLEAN,
    // timeSlots: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    classMethods: {
      associate: function(models) {
        // EventMentor.belongsTo(models.Event, {
        //   foreignKey: 'eventId',
        // });
        // EventMentor.belongsTo(models.Mentor, {
        //   foreignKey: 'mentorId',
        // });
        // models.Event.belongsToMany(models.Mentor, {
        //   // as:"StudentsEnrolled",
        //   through:"EventMentors",
        //   foreignKey: 'mentorId'
        // });
        // models.Mentor.belongsToMany(models.Event, {
        //   // as:"CoursesEnrolled",
        //   through:"EventMentors",
        //   foreignKey: 'eventId'
        // });    
      }
    }
  });
  return EventMentor;
};