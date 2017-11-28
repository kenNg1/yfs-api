// sequelize model:create --name User --attributes "email:string, username:string, salt:string, password:string, sign_in_count:integer, current_sign_in_at:date, last_sign_in_at:date, current_sign_in_ip:string, last_sign_in_ip:string"

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
				unique: true,
				validate: {
					isLowercase: true,
					notEmpty: true,
					isEmail: true
				}
      },
			tier: {
				type: Sequelize.STRING,
				defaultValue: 'student',
				validate: {
					isIn: [['student', 'mentor']]
				}
      },
			link: {
				type: Sequelize.STRING
      },
			validEmail: {
				type: Sequelize.BOOLEAN
      },
			link_expiry: {
				type: Sequelize.DATE
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: true //important
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
				validate: {
					notEmpty: true
				}
      },
      sign_in_count: {
        type: Sequelize.INTEGER,
        // allowNull: false        
      },
      current_sign_in_at: {
        type: Sequelize.DATE,
        // allowNull: false                
      },
      last_sign_in_at: {
        type: Sequelize.DATE,
        // allowNull: false        
      },
      current_sign_in_ip: {
        type: Sequelize.STRING,
        // allowNull: false        
      },
      last_sign_in_ip: {
        type: Sequelize.STRING,
        // allowNull: false        
      },
      createdAt: {
        type: Sequelize.DATE,
        // allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        // allowNull: false,        
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};

