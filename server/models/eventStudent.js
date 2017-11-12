
'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventStudent = sequelize.define('EventStudent', {
  }, {
    classMethods: {
      associate: function(models) {
        EventStudent.belongsTo(models.Event, {
          foreignKey: 'eventId',
        });
        EventStudent.belongsTo(models.Student, {
          foreignKey: 'studentId',
        });
        models.Event.belongsToMany(models.Student, {
          // as:"StudentsEnrolled",
          through:"EventStudent",
          foreignKey: 'studentId'
        });
        models.Student.belongsToMany(models.Event, {
          // as:"CoursesEnrolled",
          through:"EventStudent",
          foreignKey: 'eventId'
        });    
      }
    }
  });
  return EventStudent;
};