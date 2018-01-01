'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'event_students',
        'cancellationReason',
        {
          type: Sequelize.STRING
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'event_students',
        'cancellationReason',
        {
          type: Sequelize.STRING
        }
      )
    ]
  }
};