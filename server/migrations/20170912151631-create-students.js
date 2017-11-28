'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
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
      nickname: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      schoolName: Sequelize.STRING,
      gender: Sequelize.STRING,
      dob: Sequelize.DATE,
      mobileNumber: Sequelize.STRING,
      googleSlides: Sequelize.STRING,
      googleDocs: Sequelize.STRING,
      microsoftOffice: Sequelize.STRING,
      willGoUni: Sequelize.BOOLEAN,
      desiredUniversity: Sequelize.STRING,
      graduationPlans: Sequelize.TEXT,
      heardThrough: Sequelize.STRING,  
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
			}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('students');
  }
};