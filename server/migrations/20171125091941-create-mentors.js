'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mentors', {
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
      user_id: {
				type      : Sequelize.INTEGER,
				onDelete  : 'RESTRICT',
				onUpdate  : 'CASCADE',
				references: {
					model : 'users',
					key   : 'id',
					as	  : 'user_id'
				}
      },
      country_id: {
        type      : Sequelize.INTEGER,
        onDelete  : 'CASCADE',
        references: {
          model : 'countries',
          key   : 'id',
          as	  : 'country_id'
        }
      },
      city_id: {
        type      : Sequelize.INTEGER,
        onDelete  : 'CASCADE',
        references: {
          model : 'cities',
          key   : 'id',
          as	  : 'city_id'
        }
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mentors');
  }
};
