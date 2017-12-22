'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.addColumn(
        'event_students',
        'businessIdea',
        {
          type: Sequelize.BOOLEAN
        }
      ),
      queryInterface.addColumn(
        'event_students',
        'businessIdeaDesc',
        {
          type: Sequelize.TEXT
        }
      ),
      queryInterface.addColumn(
        'event_students',
        'openToOtherIdeas',
        {  
          type: Sequelize.BOOLEAN    
        }
      ),
      queryInterface.addColumn(
        'event_students',
        'videoLink',
        { 
          type: Sequelize.STRING
        }
      ),
    ]
  },

  down: (queryInterface, Sequelize) => {
    return [
      queryInterface.removeColumn(
        'event_students',
        'businessIdea',
        {
          type: Sequelize.BOOLEAN
        }
      ),
      queryInterface.removeColumn(
        'event_students',
        'businessIdeaDesc',
        {
          type: Sequelize.TEXT
        }
      ),
      queryInterface.removeColumn(
        'event_students',
        'openToOtherIdeas',
        {  
          type: Sequelize.BOOLEAN    
        }
      ),
      queryInterface.removeColumn(
        'event_students',
        'videoLink',
        { 
          type: Sequelize.STRING
        }
      ),
    ]
  }
};