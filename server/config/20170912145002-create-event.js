// sequelize model:create --name Event --attributes "name:string, description:string, level:string, intensity:string, terrain:string, min_ppl:integer, max_ppl:integer, price:integer, sportswear:string, gear:string, org_description:string, org_website:string, imageUpload:string, videoUpload:string, date:date, time:time, address:string" --> figure out the command to add one-to-many, many-to-many, belongs-to relationships

// add allowNull: true / false,  later



'use strict';
module.exports = { 
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
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
      description: { 
        type: Sequelize.STRING,
        allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      level: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      intensity: {
        type: Sequelize.STRING,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      terrain: {
        type: Sequelize.STRING,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      min_ppl: {
        type: Sequelize.INTEGER,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      max_ppl: {
        type: Sequelize.INTEGER,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      price: {
        type: Sequelize.INTEGER,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      sportswear: {
        type: Sequelize.STRING,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      gear: {
        type: Sequelize.STRING,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      org_description: {
        type: Sequelize.STRING,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      org_website: {
        type: Sequelize.STRING,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      imageUpload: {
        type: Sequelize.STRING,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      videoUpload: {
        type: Sequelize.STRING,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      date: {
        type: Sequelize.DATE,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      time: {
        type: Sequelize.TIME,
        // allowNull: true,
				validate: {
					notEmpty: false
				}
      },
      address: {
        type: Sequelize.STRING,
        // allowNull: true,
				validate: {
					notEmpty: false
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
    return queryInterface.dropTable('Events');
  }
};