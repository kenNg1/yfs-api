'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventStudent = sequelize.define('event_student', {
    accepted: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {}
    }
  });
  return EventStudent;
};