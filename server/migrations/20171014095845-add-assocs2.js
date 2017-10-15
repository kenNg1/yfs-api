'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'Events',
        'cityId',
        {
          type      : Sequelize.INTEGER,
          onDelete  : 'CASCADE',
          references: {
            model : 'Cities',
            key   : 'id',
            as	  : 'cityId'
          }
        }
      ),
      queryInterface.addColumn(
        'Cities',
        'countryId',
        {
          type      : Sequelize.INTEGER,
          onDelete  : 'CASCADE',
          references: {
            model : 'Countries',
            key   : 'id',
            as	  : 'countryId'
          }
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'Events',
        'cityId',
        {
          type      : Sequelize.INTEGER,
          onDelete  : 'CASCADE',
          references: {
            model : 'Cities',
            key   : 'id',
            as	  : 'cityId'
          }
        }
      ),
      queryInterface.removeColumn(
        'Cities',
        'countryId',
        {
          type      : Sequelize.INTEGER,
          onDelete  : 'CASCADE',
          references: {
            model : 'Countries',
            key   : 'id',
            as	  : 'countryId'
          }
        }
      )
    ]
  }
};
