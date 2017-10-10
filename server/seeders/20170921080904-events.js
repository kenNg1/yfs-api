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

    return queryInterface.bulkInsert('Events', [
      {
          "name": "Casual Slamdunking",
          "description": "1234",
          "level": [
              "beginner"
          ],
          "intensity": "casual",
          "terrain": "indoor",
          "min_ppl": null,
          "max_ppl": 2345,
          "price": 10,
          "sportswear": "2345",
          "gear": null,
          "org_description": "1234",
          "org_website": "1234",
          "imageUpload": "http://img.bleacherreport.net/img/images/photos/002/158/471/hi-res-73358819_crop_north.jpg?1360856180&w=630&h=420",
          "videoUpload": null,
          "date": "2017-09-27T16:00:00.000Z",
          "time": "19:00:00",
          "address": "Room 2L, 498 EAST COAST ROAD",
          "createdAt": "2017-09-21T02:31:10.520Z",
          "updatedAt": "2017-09-21T03:09:48.120Z",
          "district_id": 4,
          "user_id": 3,
          "sport_id": 2
      },
      {
          "name": "Football training",
          "description": "Washing",
          "level": [
              "beginner"
          ],
          "intensity": "casual",
          "terrain": "outdoor",
          "min_ppl": null,
          "max_ppl": null,
          "price": 50,
          "sportswear": null,
          "gear": null,
          "org_description": null,
          "org_website": null,
          "imageUpload": "http://cdn0.sbnation.com/assets/3872219/452614983.jpg",
          "videoUpload": null,
          "date": "2017-11-14T16:00:00.000Z",
          "time": "17:00:00",
          "address": null,
          "createdAt": "2017-09-18T01:20:58.165Z",
          "updatedAt": "2017-09-21T04:02:05.575Z",
          "district_id": 16,
          "user_id": 1,
          "sport_id": 3
      },
      {
          "name": "Hockey training",
          "description": "Washing",
          "level": [
              "intermediate"
          ],
          "intensity": "competitive",
          "terrain": "indoor",
          "min_ppl": null,
          "max_ppl": null,
          "price": 50,
          "sportswear": null,
          "gear": null,
          "org_description": null,
          "org_website": null,
          "imageUpload": "https://static01.nyt.com/images/2012/07/13/sports/olympics/13rachel/13rachel-blog480.jpg",
          "videoUpload": null,
          "date": "2017-12-05T16:00:00.000Z",
          "time": "18:00:00",
          "address": "2907 Wing Mei House, Yau Tong",
          "createdAt": "2017-09-17T08:21:19.013Z",
          "updatedAt": "2017-09-21T04:02:19.971Z",
          "district_id": 6,
          "user_id": 2,
          "sport_id": 1
      },
      {
          "name": "Throw DAT DISK",
          "description": "For wannabe discus champs",
          "level": [
              "beginner",
              "intermediate"
          ],
          "intensity": "casual",
          "terrain": "outdoor",
          "min_ppl": null,
          "max_ppl": null,
          "price": 25,
          "sportswear": "10",
          "gear": null,
          "org_description": "aidj",
          "org_website": "oihfoaifh.com",
          "imageUpload": "https://fitandrec.gryphons.ca/ModuleFile/?id=463",
          "videoUpload": null,
          "date": "2017-09-20T16:00:00.000Z",
          "time": "10:00:00",
          "address": "Room 2L, 498 EAST COAST ROAD",
          "createdAt": "2017-09-18T07:06:06.781Z",
          "updatedAt": "2017-09-21T04:36:17.225Z",
          "district_id": 16,
          "user_id": 1,
          "sport_id": 5
      },
      {
          "name": "Volleyball! ",
          "description": "play together",
          "level": [
              "intermediate"
          ],
          "intensity": "casual",
          "terrain": "indoor",
          "min_ppl": null,
          "max_ppl": null,
          "price": 50,
          "sportswear": null,
          "gear": null,
          "org_description": null,
          "org_website": null,
          "imageUpload": "http://www.active.com/Assets/active-family/Drills/volleyball-fundamentals-620.jpg",
          "videoUpload": null,
          "date": "2017-09-21T16:00:00.000Z",
          "time": "11:00:00",
          "address": "Wework wanchai",
          "createdAt": "2017-09-19T03:58:14.558Z",
          "updatedAt": "2017-09-21T04:59:21.050Z",
          "district_id": 4,
          "user_id": 1,
          "sport_id": 6
      },
      {
          "name": "Hockey match",
          "description": "fun times",
          "level": [
              "intermediate"
          ],
          "intensity": "competitive",
          "terrain": "outdoor",
          "min_ppl": 8,
          "max_ppl": 11,
          "price": 40,
          "sportswear": "11",
          "gear": "stick",
          "org_description": "we play hockey",
          "org_website": "www.hockey.com",
          "imageUpload": "https://s.ndtvimg.com/images/content/2016/jun/806/indian-women-hockey-team-0106.jpg",
          "videoUpload": null,
          "date": "2017-10-09T16:00:00.000Z",
          "time": "15:00:00",
          "address": "Domain, Yau Tong, HK",
          "createdAt": "2017-09-17T02:48:05.548Z",
          "updatedAt": "2017-09-21T04:59:43.291Z",
          "district_id": 1,
          "user_id": 1,
          "sport_id": 1
      }],{})
  
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
