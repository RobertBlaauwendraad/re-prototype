'use strict';

const dbConnector = require("../../../config/db.config");

const Availabilty = function (availabilty) {
  this.volunteerId = availabilty.volunteerId;
  this.datetimeFrom = availabilty.datetimeFrom;
  this.datetimeTo = availabilty.datetimeTo;
};