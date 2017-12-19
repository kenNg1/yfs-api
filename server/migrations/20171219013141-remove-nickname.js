'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'students',
        'nickname'
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'students',
        'nickname'
      )
    ]
  }
};
