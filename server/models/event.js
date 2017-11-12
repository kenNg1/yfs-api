'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,    
    location: DataTypes.STRING,    
    shortInfo: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    price: DataTypes.INTEGER,
    type: DataTypes.STRING,
    deadline: DataTypes.DATE,
    students: DataTypes.INTEGER,
    studentsMax: DataTypes.INTEGER,
    fixedMentors: DataTypes.INTEGER,
    fixedMentorsMax: DataTypes.INTEGER,
    floatingMentors: DataTypes.INTEGER,
    floatingMentorsMax: DataTypes.INTEGER,
    notice: DataTypes.TEXT,
    longInfo: DataTypes.TEXT,
    status: DataTypes.STRING, 
  }, {
    classMethods: {
      associate: function(models) {
        Event.belongsTo(models.Country, { foreignKey: 'countryId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Event.belongsTo(models.City, { foreignKey: 'cityId', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      //   Event.belongsToMany(models.Student, {
      //     as:"StudentsEnrolled",
      //     through:"EventStudent",
      //     foreignKey: 'studentId'
      // });
      }
    }
  });
  return Event;
};