'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventStudent = sequelize.define('EventStudent', {
  }, {
    classMethods: {
      associate: function(models) {
        // EventStudent.belongsTo(models.Event, {
        //   foreignKey: 'eventId',
        // });
        // EventStudent.belongsTo(models.Student, {
        //   foreignKey: 'studentId',
        // });
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