'use strict';

const Volunteer = require('../models/volunteer.model');

exports.findAll = function (req, res) {
  Volunteer.findAll(function (err, volunteer) {
    console.log('controller')
    if (err) {
      res.send(err);
    }
    console.log('res', volunteer);
    res.send(volunteer);
  });
};