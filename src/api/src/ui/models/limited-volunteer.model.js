'use strict';

const LimitedVolunteer = function (volunteer) {
  this.firstName = volunteer.firstName;
  this.lastName = volunteer.lastName;
  this.description = volunteer.description;
};

module.exports = LimitedVolunteer;