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
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Beneficiary;