'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: DataTypes.STRING
  }, {
    timestamps: false,    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        City.hasMany(models.Event, { foreignKey: 'cityId' });
        City.belongsTo(models.Country, { foreignKey: 'countryId' , onUpdate: 'CASCADE' });
      }
    }
  });
  return City;
};