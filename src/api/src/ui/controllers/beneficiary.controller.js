'use strict';

const BeneficiaryEnitity = require('../../data/entities/beneficiary.entity');

exports.getActivitiesById = function (req, res) {
  BeneficiaryEnitity.getActivitiesById(req.params.id, function (err, activities) {
    if (err) {
      res.send(err);
    }
    res.send(activities);
  })
}