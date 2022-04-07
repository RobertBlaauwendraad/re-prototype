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

Beneficiary.getActivities = function (id, result) {
  dbConnector.query("SELECT A.id, A.name, A.description FROM Activity A JOIN BeneficiaryActivity BA ON A.id = BA.activityId WHERE BA.beneficiaryId = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Beneficiary.getVolunteers = function (id, result) {
  dbConnector.query("\n" +
    "SELECT V.id, V.firstName, V.lastName, V.description FROM Volunteer V JOIN VolunteerActivity VA ON V.id = VA.volunteerId JOIN BeneficiaryActivity BA ON VA.activityId = BA.activityId JOIN Availability A ON V.id = A.volunteerId WHERE BA.beneficiaryId = ? AND A.id NOT IN (SELECT availabilityId FROM Booking) GROUP BY V.id;", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Beneficiary.getBookings = function (id, result) {
  dbConnector.query("SELECT B.id,V.firstName,V.lastName, V.email, V.phoneNumber, B.consentSharingBeneficiaryEmail,B.consentSharingBeneficiaryPhone,B.consentSharingVolunteerEmail,B.consentSharingVolunteerPhone FROM Booking B JOIN Availability A ON A.id = B.availabilityId JOIN Volunteer V ON V.id = A.volunteerId WHERE beneficiaryId = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  })
}

Beneficiary.insertActivity = function (beneficiaryId, activityId, result) {
  dbConnector.query("INSERT INTO BeneficiaryActivity VALUES (?, ?)", [beneficiaryId, activityId], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Beneficiary.deleteActivity = function (beneficiaryId, activityId, result) {
  dbConnector.query("DELETE FROM BeneficiaryActivity WHERE beneficiaryId = ? AND activityId = ?", [beneficiaryId, activityId], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Beneficiary.shareEmail = function (id, result) {
  dbConnector.query("UPDATE Booking SET consentSharingBeneficiaryEmail = 1 WHERE id = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  })
}

Beneficiary.sharePhone = function (id, result) {
  dbConnector.query("UPDATE Booking SET consentSharingBeneficiaryPhone = 1 WHERE id = ?", id, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  })
}

module.exports = Beneficiary;