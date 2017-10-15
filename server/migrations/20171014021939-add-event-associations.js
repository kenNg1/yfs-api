'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'Events',
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
      ),
      queryInterface.addColumn(
        'Students',
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
        'countryId',
        {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),
      queryInterface.removeColumn(
        'Students',
        'countryId',
        {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      )
    ]
  }
};
