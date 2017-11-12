'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventStudents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      studentId: {
				type      : Sequelize.INTEGER,
				onDelete  : 'RESTRICT',
				onUpdate  : 'CASCADE',
				references: {
					model : 'Students',
					key   : 'id',
					as	  : 'studentId'
				}
			},
      eventId: {
				type      : Sequelize.INTEGER,
				onDelete  : 'RESTRICT',
				onUpdate  : 'CASCADE',
				references: {
					model : 'Events',
					key   : 'id',
					as	  : 'eventId'
				}
			}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('EventStudents');
  }
};
