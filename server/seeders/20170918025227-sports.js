'use strict';

function generateSports() {
  var i;
  var date = new Date();

  var sports = [
    {name:"Hockey"},
    {name:"Basketball"},
    {name:"Football"},
    {name:"Rugby"},
    {name:"Ultimate Frisbee"},
    {name:"Volleyball"},
    {name:"Badminton"},
    {name:"Tennis"},
    {name:"Crossfit"},
    {name:"Table Tennis"},
    ];
  for (i = 0; i < sports.length; i++) {
    sports[i].createdAt = date;
    sports[i].updatedAt = date;
  }
  return sports;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Sports', generateSports() ,{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Sports', null, {});
  }
};
