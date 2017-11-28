
'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventMentor = sequelize.define('events_mentor', {
     role: DataTypes.STRING,
     accepted: DataTypes.BOOLEAN,
    timeSlots: DataTypes.ARRAY(DataTypes.STRING),
    test: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        EventMentor.belongsTo(models.event, {
          foreignKey:{
            name:'eventId',
            field:'event_id'
          }
        });
        EventMentor.belongsTo(models.mentor, {
          foreignKey:{
            name:'mentorId',
            field:'mentor_id'
          }
        });
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