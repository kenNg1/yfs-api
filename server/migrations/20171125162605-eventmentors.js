'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('EventMentors', {
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
      mentorId: {
				type      : Sequelize.INTEGER,
				onDelete  : 'RESTRICT',
				onUpdate  : 'CASCADE',
				references: {
					model : 'Mentors',
					key   : 'id',
					as	  : 'mentorId'
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
    return queryInterface.dropTable('EventMentors');
  }
};
