'use strict';
module.exports = (sequelize, DataTypes) => {
  var Country = sequelize.define('Country', {
    name: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Country.hasMany(models.Event, { foreignKey: 'countryId' });
        Country.hasMany(models.Student, { foreignKey: 'countryId' });
        Country.hasMany(models.City, { foreignKey: 'countryId' });
      }
    }
  });
  return Country;
};