'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'events',
        'city_id',
        {
          type      : Sequelize.INTEGER,
          onDelete  : 'CASCADE',
          references: {
            model : 'cities',
            key   : 'id',
            as	  : 'city_id'
          }
        }
      ),
      queryInterface.addColumn(
        'cities',
        'country_id',
        {
          type      : Sequelize.INTEGER,
          onDelete  : 'CASCADE',
          references: {
            model : 'countries',
            key   : 'id',
            as	  : 'country_id'
          }
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'events',
        'city_id',
        {
          type      : Sequelize.INTEGER,
          onDelete  : 'CASCADE',
          references: {
            model : 'cities',
            key   : 'id',
            as	  : 'cityId'
          }
        }
      ),
      queryInterface.removeColumn(
        'cities',
        'country_id',
        {
          type      : Sequelize.INTEGER,
          onDelete  : 'CASCADE',
          references: {
            model : 'countries',
            key   : 'id',
            as	  : 'countryId'
          }
        }
      )
    ]
  }
};
