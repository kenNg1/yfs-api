'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mentors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      mobileNumber: Sequelize.STRING,
      companyName: Sequelize.STRING,
      industry: Sequelize.STRING,
      title: Sequelize.STRING,
      participation: {
				type: Sequelize.STRING,
				validate: {
					isIn: [['speaker', 'mentor', 'vcPanelist']]
				}
      },
      about: Sequelize.TEXT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
				type      : Sequelize.INTEGER,
				onDelete  : 'RESTRICT',
				onUpdate  : 'CASCADE',
				references: {
					model : 'Users',
					key   : 'id',
					as	  : 'userId'
				}
      },
      countryId: {
        type      : Sequelize.INTEGER,
        onDelete  : 'CASCADE',
        references: {
          model : 'Countries',
          key   : 'id',
          as	  : 'countryId'
        }
      },
      cityId: {
        type      : Sequelize.INTEGER,
        onDelete  : 'CASCADE',
        references: {
          model : 'Cities',
          key   : 'id',
          as	  : 'cityId'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mentors');
  }
};
