'use strict';

const ActivityModel = function (activity) {
  this.id = activity.id;
  this.name = activity.name;
  this.description = activity.description;
};

module.exports = ActivityModel;