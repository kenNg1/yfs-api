// const Student = require('../models').Student;
// const Event = require('../models').Event;


// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   var EventStudent = sequelize.define('EventStudent', {
//   }, {
//     classMethods: {
//       associate: function(models) {
//         Student.belongsToMany(models.Event, {through: EventStudent});
//         Event.belongsToMany(models.Student, {through: EventStudent});
//       }
//     }
//   });
//   return EventStudent;
// };