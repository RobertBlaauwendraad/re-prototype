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

exports.findById = function(req, res) {
  Volunteer.findById(req.params.id, function(err, volunteer) {
    if (err)
      res.send(err);
    res.json(volunteer);
  });
};

exports.getAvailabilityById = function (req, res) {
  Volunteer.getAvailabilityById(req.params.id,function (err, availability) {
    if (err) {
      res.send(err);
    }
    res.send(availability);
  });
}

exports.getActivitiesById = function (req, res) {
  Volunteer.getActivitiesById(req.params.id, function (err, activities) {
    if (err) {
      res.send(err);
    }
    res.send(activities);
  })
}