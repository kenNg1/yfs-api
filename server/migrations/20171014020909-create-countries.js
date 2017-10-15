'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Countries', {
      id: { 
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type:Sequelize.STRING,
        allowNull: false
      } 
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Countries');   
  }
};
