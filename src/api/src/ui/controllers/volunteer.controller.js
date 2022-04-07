'use strict';

const VolunteerEntity = require('../../data/entities/volunteer.entity');
const VolunteerModel = require('../models/volunteer.model');

exports.findAll = function (req, res) {
  VolunteerEntity.findAll(function (err, volunteers) {
    if (err) {
      res.send(err);
    }
    const volunteerModels = [];
    for (const volunteer of volunteers) {
      const volunteerModel = new VolunteerModel(volunteer);
      volunteerModels.push(volunteerModel);
    }
    res.send(volunteerModels);
  });
};

exports.findById = function(req, res) {
  VolunteerEntity.findById(req.params.id, function(err, volunteer) {
    if (err)
      res.send(err);
    // Return only the first object in array
    res.json(volunteer[0]);
  });
};

exports.getAvailabilityById = function (req, res) {
  VolunteerEntity.getAvailabilityById(req.params.id,function (err, availability) {
    if (err) {
      res.send(err);
    }
    res.send(availability);
  });
}

exports.getActivitiesById = function (req, res) {
  VolunteerEntity.getActivitiesById(req.params.id, function (err, activities) {
    if (err) {
      res.send(err);
    }
    res.send(activities);
  })
}