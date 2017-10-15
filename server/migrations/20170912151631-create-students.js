'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
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
      userId: {
				type      : Sequelize.INTEGER,
				onDelete  : 'RESTRICT',
				onUpdate  : 'CASCADE',
				references: {
					model : 'Users',
					key   : 'id',
					as	  : 'userId'
				}
			}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students');
  }
};