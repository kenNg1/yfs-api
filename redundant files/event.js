'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    level: DataTypes.ARRAY(DataTypes.STRING),
    intensity: DataTypes.STRING,
    terrain: DataTypes.STRING,
    min_ppl: DataTypes.INTEGER,
    max_ppl: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    sportswear: DataTypes.STRING,
    gear: DataTypes.STRING,
    org_description: DataTypes.STRING,
    org_website: DataTypes.STRING,
    imageUpload: DataTypes.STRING,
    videoUpload: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // belongs_to :district
        // belongs_to :user
        // belongs_to :sport
        // associations can be defined here
        Event.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Event.belongsTo(models.District, { foreignKey: 'district_id', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
        Event.belongsTo(models.Sport, { foreignKey: 'sport_id', onDelete: 'RESTRICT', onUpdate: 'CASCADE' });
      }
    }
  });
  return Event;
};