'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('event_mentors', {
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
      role: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: false,
          validate: {
            isIn: [['fixedMentor', 'floatingMentor', 'lecturer']]
          }
				}
      },
      timeSlots: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      mentor_id: {
				type      : Sequelize.INTEGER,
				onDelete  : 'RESTRICT',
				onUpdate  : 'CASCADE',
				references: {
					model : 'mentors',
					key   : 'id',
					as	  : 'mentor_id'
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
    return queryInterface.dropTable('event_mentors');
  }
};
