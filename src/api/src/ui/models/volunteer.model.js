'use strict';

const VolunteerModel = function (volunteer) {
  this.id = volunteer.id;
  this.firstName = volunteer.firstName;
  this.lastName = volunteer.lastName;
  this.description = volunteer.description;
};

module.exports = VolunteerModel;