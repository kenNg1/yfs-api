'use strict';
module.exports = (sequelize, DataTypes) => {
  var Image = sequelize.define('image', {
    dateTaken: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    timestamps: false,    
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Image;
};