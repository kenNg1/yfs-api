'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events_students', {
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
      accepted: {
				type: Sequelize.BOOLEAN
      },
      student_id: {
				type      : Sequelize.INTEGER,
				onDelete  : 'RESTRICT',
				onUpdate  : 'CASCADE',
				references: {
					model : 'students',
					key   : 'id',
					as	  : 'student_id'
				}
			},
      event_id: {
				type      : Sequelize.INTEGER,
				onDelete  : 'RESTRICT',
				onUpdate  : 'CASCADE',
				references: {
					model : 'events',
					key   : 'id',
					as	  : 'event_id'
				}
			}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events_students');
  }
};
