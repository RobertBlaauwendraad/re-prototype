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

exports.insertActivityById = function (req, res) {
  BeneficiaryEnitity.insertActivityById(req.params.beneficiaryId, req.params.activityId, function (err, result) {
    if (err) {
      throw new Error(err)
    }
    res.send(result);
  })
}

exports.deleteActivityById = function (req, res) {
  BeneficiaryEnitity.deleteActivityById(req.params.beneficiaryId, req.params.activityId, function (err, result) {
    if (err) {
      throw new Error(err)
    }
    res.send(result);
  })
}