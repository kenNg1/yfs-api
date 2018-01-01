'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventStudent = sequelize.define('event_student', {
    status: DataTypes.STRING,
    businessIdea: DataTypes.BOOLEAN,
    businessIdeaDesc: DataTypes.TEXT,    
    openToOtherIdeas: DataTypes.BOOLEAN,    
    videoLink: DataTypes.STRING, 
    cancellationReason: DataTypes.STRING, 
  }, {
    classMethods: {
      associate: function(models) {}
    }
  });
  return EventStudent;
};