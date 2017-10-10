'use strict';

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
      return queryInterface.bulkInsert('Districts', [
        {name: "Causeway Bay", lat:"22.2859787", lng:"114.1914919"},
        {name:"Central",lat:"22.2799907",lng:"114.1587983"},
        {name:"Discovery Bay",lat:"22.2921406",lng:"114.0101467"},
        {name:"Fanling",lat:"22.4916829",lng:"114.1414685"},
        {name:"Hung Hom",lat:"22.3055658",lng:"114.1887233"},
        {name:"Jordan",lat:"22.3048612",lng:"114.1692021"},
        {name:"Kowloon City",lat:"22.3232097",lng:"114.1855505"},
        {name:"Lantau Island",lat:"22.2664984",lng:"113.941751"},
        {name:"Mong Kok",lat:"22.3203648",lng:"114.169773"},
        {name:"Olympic",lat:"22.2736403",lng:"114.1875011"},
        {name:"Sai Kung",lat:"22.383689",lng:"114.2707867"},
        {name:"Sheung Wan",lat:"22.2863943",lng:"114.1491375"},
        {name:"Tin Hau",lat:"22.2823972",lng:"114.1922382"},
        {name:"Tseung Kwan O",lat:"22.3119357",lng:"114.2568776"},
        {name:"Tsim Sha Tsui",lat:"22.2988123",lng:"114.1721746"},
        {name:"Wan Chai",lat:"22.276022",lng:"114.1751471"},
        {name:"Yau Ma Tei",lat:"22.3068537",lng:"114.1714423"}
        ],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Districts', null, {});
  }
};
