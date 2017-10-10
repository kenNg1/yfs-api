// sequelize model:create --name Sport --attributes "name:string, description:string, rules:string, sportsExternalUrl:string, imageUrl:string"

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      rules: {
        type: Sequelize.STRING
      },
      sportsExternalUrl: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Sports');
  }
};

// Original plan
// module.exports = {
// 	up: (queryInterface, Sequelize)	=>
// 		queryInterface.createTable('Sports', {
// 			id: {
// 				allowNull: false,
// 				autoIncrement: true,
// 				primaryKey: true,
// 				type: Sequelize.INTEGER
// 			},
// 			name: {
// 				type: Sequelize.STRING,
// 				allowNull: true,
// 				validate: {
// 					notEmpty: false,
// 				}
// 			},
// 			description: {
// 				type: Sequelize.STRING,
// 				allowNull: true,
// 				validate: {
// 					notEmpty: false,
// 				}
// 			},
// 			rules: {
// 				type: SEQUELIZE.ARRAY(SEQUELIZE.STRING),
// 				allowNull: true,
// 				validate: {
// 					notEmpty: false,
// 				}
// 			},
// 			sportsExternalUrl: {
// 				type: SEQUELIZE.STRING,
// 				allowNull: true,
// 				validate: {
// 					notEmpty: false,
// 				}
// 			},
// 			imageUrl: {
// 				type: Sequelize.STRING,
// 				allowNull: true,
// 				validate: {
// 					notEmpty: false,
// 				}
// 			},
// 			createdAt: {
// 				allowNull: false,
// 				type: Sequelize.DATE
// 			},
// 			updatedAt: {
// 				allowNull: false,
// 				type: Sequelize.DATE
// 			}
// 		}),
// 	down: (queryInterface) => queryInterface.dropTable('Sports')
// }