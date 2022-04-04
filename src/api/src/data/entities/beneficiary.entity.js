'use strict';

const dbConnector = require("../../../config/db.config");

const Beneficiary = function (beneficiary) {
  this.firstName = beneficiary.firstName;
  this.lastName = beneficiary.lastName;
  this.email = beneficiary.email;
  this.phoneNumber = beneficiary.phoneNumber;
  this.password = beneficiary.password;
  this.description = beneficiary.description;
};

Beneficiary.getActivitiesById = function (id, result) {
  dbConnector.query("SELECT A.id, A.name, A.description FROM Activity A JOIN BeneficiaryActivity BA ON A.id = BA.activityId WHERE BA.beneficiaryId = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Beneficiary.getVolunteersById = function (id, result) {
  dbConnector.query("SELECT V.id, V.firstName, V.lastName, V.description FROM Volunteer V JOIN VolunteerActivity VA ON V.id = VA.volunteerId JOIN BeneficiaryActivity BA WHERE BA.beneficiaryId = ? AND VA.activityId = BA.activityId GROUP BY V.id", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Beneficiary.insertActivityById = function (beneficiaryId, activityId, result) {
  dbConnector.query("INSERT INTO BeneficiaryActivity VALUES (?, ?)", [beneficiaryId, activityId], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Beneficiary.deleteActivityById = function (beneficiaryId, activityId, result) {
  dbConnector.query("DELETE FROM BeneficiaryActivity WHERE beneficiaryId = ? AND activityId = ?", [beneficiaryId, activityId], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


module.exports = Beneficiary;