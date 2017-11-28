'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventStudent = sequelize.define('events_student', {
  }, {
    classMethods: {
      associate: function(models) {
        EventStudent.belongsTo(models.event, {
          foreignKey:{
            name:'eventId',
            field:'event_id'            
          }
        });
        EventStudent.belongsTo(models.student, {
          foreignKey:{
            name:'studentId',
            field:'student_id'
          }
        });
        // EventStudent.belongsTo(models.Event);
        // EventStudent.belongsTo(models.Student);
        // models.Event.belongsToMany(models.Student, {
        //   as:"StudentsEnrolled",
        //   through:"EventStudent",
        //   foreignKey: 'studentId'
        // });
        // models.Student.belongsToMany(models.Event, {
        //   as:"CoursesEnrolled",
        //   through:"EventStudent",
        //   foreignKey: 'eventId'
        // });  
      //   models.Student.belongsToMany(models.Event, {
      //     as:"CoursesEnrolled",
      //     through:"EventStudents",
      //     foreignKey: models.Student.id
      //   });
      //  models.Event.belongsToMany(models.Student, {
      //     as:"StudentsEnrolled",
      //     through:"EventStudents",
      //     foreignKey: models.Event.Id
      // });      
      }
    }
  });
  return EventStudent;
};