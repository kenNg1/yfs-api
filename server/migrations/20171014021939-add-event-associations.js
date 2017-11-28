'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'events',
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
      ),
      queryInterface.addColumn(
        'students',
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
        'country_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      ),
      queryInterface.removeColumn(
        'students',
        'country_id',
        {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      )
    ]
  }
};
