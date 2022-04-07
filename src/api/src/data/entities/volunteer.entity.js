'use strict';

const dbConnector = require("../../../config/db.config");

const Volunteer = function (volunteer) {
  this.firstName = volunteer.firstName;
  this.lastName = volunteer.lastName;
  this.email = volunteer.email;
  this.phoneNumber = volunteer.phoneNumber;
  this.password = volunteer.password;
  this.description = volunteer.description;
};

Volunteer.create = function (newVol, result) {
  dbConnector.query("INSERT INTO Volunteer set ?", newVol, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else{
      result(null, res);
    }
  });
};

Volunteer.findById = function (id, result) {
  dbConnector.query("SELECT * FROM Volunteer WHERE id = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
};

Volunteer.findAll = function (result) {
  dbConnector.query("SELECT * FROM Volunteer", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else{
      result(null, res);
    }
  });
};

Volunteer.update = function (id, volunteer, result) {
  dbConnector.query(
    "UPDATE Volunteer SET firstName=?, lastName=?, email=?, phoneNumber=?, password=?,description=? WHERE id = ?",
    [volunteer.firstName, volunteer.lastName, volunteer.email, volunteer.phoneNumber, volunteer.password, volunteer.description, id],
    function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(err, null);
      } else{
        result(null, res);
      }
    }
  );
}

Volunteer.delete = function (id, result) {
  dbConnector.query("DELETE FROM Volunteer WHERE id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else{
      result(null, res);
    }
  });
};

Volunteer.getAvailabilityById = function (id, result) {
  dbConnector.query("SELECT * FROM Availability WHERE id NOT IN (SELECT availabilityId FROM Booking) AND volunteerId = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else{
      result(null, res);
    }
  });
};

Volunteer.getActivitiesById = function (id, result) {
  dbConnector.query("SELECT A.id, A.name, A.description FROM Activity A JOIN VolunteerActivity AC ON A.id = AC.activityId WHERE AC.volunteerId = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else{
      result(null, res);
    }
  });
};

module.exports = Volunteer;