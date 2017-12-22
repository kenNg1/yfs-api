'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'event_students',
        'accepted'
      ),
      queryInterface.addColumn(
        'event_students',
        'status',
        {
          type: Sequelize.STRING
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'event_students',
        'accepted',
        {
          type: Sequelize.BOOLEAN
        }
      ),
      queryInterface.removeColumn(
        'event_students',
        'status',
        {
          type: Sequelize.STRING
        }
      )
    ]
  }
};