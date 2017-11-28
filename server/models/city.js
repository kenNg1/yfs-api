'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('city', {
    name: DataTypes.STRING
  }, {
    timestamps: false,    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        City.hasMany(models.event, { foreignKey:{
          name:'cityId',
          field:'city_id'
         } });
        City.belongsTo(models.country, { foreignKey:{
          name:'countryId',
          field:'country_id'
         } , onUpdate: 'CASCADE' });
      }
    }
  });
  return City;
};