'use strict';

const Volunteer = require('../../data/entities/volunteer.entity');
const LimitedVolunteer = require('../models/limited-volunteer.model');

exports.findAll = function (req, res) {
  Volunteer.findAll(function (err, volunteers) {
    if (err) {
      res.send(err);
    }
    const limitedVolunteers = [];
    for (const volunteer of volunteers) {
      const limitedVolunteer = new LimitedVolunteer(volunteer);
      limitedVolunteers.push(limitedVolunteer)
    }
    res.send(limitedVolunteers);
  });
};