'use strict';

const dbConnector = require("../../../config/db.config");

const Activity = function (activity) {
  this.name = activity.name;
  this.description = activity.description;
};

Activity.findAll = function (result) {
  dbConnector.query("SELECT * FROM Activity", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    } else{
      result(null, res);
    }
  });
};

module.exports = Activity;