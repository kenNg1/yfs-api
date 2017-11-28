'use strict';
module.exports = { 
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false        
      },
      image: {
        type: Sequelize.STRING,
				validate: {
					notEmpty: false
				}
      },
      location: {
        type: Sequelize.STRING,
				validate: {
					notEmpty: false
				}
      },
      shortInfo: { 
        type: Sequelize.STRING,
				validate: {
					notEmpty: false
				}
      },
      date: {
        type: Sequelize.DATE,
				validate: {
					notEmpty: false
				}
      },
      time: {
        type: Sequelize.TIME,
				validate: {
					notEmpty: false
				}
      },
      price: {
        type: Sequelize.INTEGER,
				validate: {
					notEmpty: false
				}
      },
      type: {
        type: Sequelize.STRING,
				validate: {
          notEmpty: false,
          isIn: [['day', 'bootcamp', 'talk']]
          }
      },
      deadline: {
        type: Sequelize.STRING,
				validate: {
					notEmpty: false
				}
      },
      studentsIn: {
        type: Sequelize.INTEGER,
				validate: {
					notEmpty: false
				}
      },
      studentsMax: {
        type: Sequelize.INTEGER,
				validate: {
					notEmpty: false
				}
      },
      fixedMentorsIn: {
        type: Sequelize.INTEGER,
				validate: {
					notEmpty: false
				}
      },
      fixedMentorsMax: {
        type: Sequelize.INTEGER,
				validate: {
					notEmpty: false
				}
      },
      floatingMentorsIn: {
        type: Sequelize.INTEGER,
				validate: {
					notEmpty: false
				}
      },
      floatingMentorsMax: {
        type: Sequelize.INTEGER,
				validate: {
					notEmpty: false
				}
      },
      notice: {
        type: Sequelize.TEXT,
				validate: {
					notEmpty: false
				}
      },
      longInfo: {
        type: Sequelize.TEXT,
				validate: {
					notEmpty: false
				}
      },
      status: {
        type: Sequelize.STRING,
				validate: {
          notEmpty: false,
          validate: {
            isIn: [['draft', 'active', 'inactive','expired']]
          }
				}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};