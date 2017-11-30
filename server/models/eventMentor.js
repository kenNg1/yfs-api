
'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventMentor = sequelize.define('event_mentor', {
     role: DataTypes.STRING,
     accepted: DataTypes.BOOLEAN,
    timeSlots: DataTypes.ARRAY(DataTypes.STRING),
    test: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {}
    }
  });
  return EventMentor;
};