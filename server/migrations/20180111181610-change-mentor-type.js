'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    // 				type: SEQUELIZE.ARRAY(SEQUELIZE.STRING),
    return [
      queryInterface.removeColumn(
        'mentors',
        'participation',
        {
        type: Sequelize.STRING,
        }
      ),
      queryInterface.addColumn(
        'mentors',
        'participation',
        {
				type: Sequelize.ARRAY(Sequelize.STRING),
        }
      )
    ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn(
        'mentors',
        'participation',
        {
          type: Sequelize.ARRAY(Sequelize.STRING),
        }
      ),
      queryInterface.addColumn(
        'mentors',
        'participation',
        {
          type: Sequelize.STRING
        }
      )
    ]
  }
};
