'use strict';
module.exports = (sequelize, DataTypes) => {
  var Country = sequelize.define('country', {
    name: DataTypes.STRING
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Country.hasMany(models.event, { foreignKey:{
          name:'countryId',
          field:'country_id'
         } });
        Country.hasMany(models.student, { foreignKey: {
          name:'countryId',
          field:'country_id' 
        }
        });
        Country.hasMany(models.city, { foreignKey: {
          name:'countryId',
          field:'country_id'
         } });
      }
    }
  });
  return Country;
};