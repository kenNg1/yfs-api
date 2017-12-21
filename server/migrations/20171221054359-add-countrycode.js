'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'countries',
        'code',
        {
          type:Sequelize.STRING
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'countries',
        'code'
      )
    ]
  }
};
