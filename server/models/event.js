'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('event', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,    
    location: DataTypes.STRING,    
    shortInfo: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    deadline: DataTypes.DATE,
    studentsIn: DataTypes.INTEGER,
    studentsMax: DataTypes.INTEGER,
    fixedMentorsIn: DataTypes.INTEGER,
    fixedMentorsMax: DataTypes.INTEGER,
    floatingMentorsIn: DataTypes.INTEGER,
    floatingMentorsMax: DataTypes.INTEGER,
    notice: DataTypes.TEXT,
    longInfo: DataTypes.TEXT,
    status: DataTypes.STRING, 
  }, {
    classMethods: {
      associate: function(models) {
        Event.belongsTo(models.country, { foreignKey: 'countryId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Event.belongsTo(models.city, { foreignKey: 'cityId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });

        Event.belongsToMany(models.student, {
          // as:"StudentsEnrolled",
          through:models.event_student,
          foreignKey:  {
            name:"eventId",
            field:'event_id'
          }
        });

        Event.belongsToMany(models.mentor, {
          // as:"StudentsEnrolled",
          through:models.event_mentor,
          foreignKey: {
            name:"eventId",
            field:'event_id'
          }
        });

      
      }
    }
  });
  return Event;
};