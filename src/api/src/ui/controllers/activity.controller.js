'use strict';

const ActivityEntity = require('../../data/entities/activity.entity');
const ActivityModel = require('../models/activity.model');

exports.findAll = function (req, res) {
  ActivityEntity.findAll(function (err, activities) {
    if (err) {
      res.send(err);
    }
    const activityModels = [];
    for (const activity of activities) {
      const activityModel = new ActivityModel(activity);
      activityModels.push(activityModel);
    }
    res.send(activityModels);
  });
};