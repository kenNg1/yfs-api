'use strict';
module.exports = (sequelize, DataTypes) => {
  var District = sequelize.define('District', {
    name: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        District.hasMany(models.Event, { foreignKey: 'district_id' });
      }
    }
  });
  return District;
};