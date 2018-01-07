'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'countries',
        'dial_code',
        {
          type: Sequelize.STRING
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'countries',
        'dial_code',
        {
          type: Sequelize.STRING
        }
      )
    ]
  }
};
