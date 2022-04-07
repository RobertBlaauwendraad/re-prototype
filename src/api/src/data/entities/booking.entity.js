'use strict';

const dbConnector = require("../../../config/db.config");

const BookingEntity = function (booking) {
  this.id = booking.id;
  this.beneficiaryId = booking.beneficiaryId;
  this.availabilityId = booking.availabilityId;
  this.activityId = booking.activityId;
  this.consentSharingBeneficiaryEmail= false;
  this.consentSharingBeneficiaryPhone= false;
  this.consentSharingVolunteerEmail= false;
  this.consentSharingVolunteerPhone= false;
};

BookingEntity.create = function (newBooking, result) {
  dbConnector.query("INSERT INTO Booking set ?", newBooking, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else{
      result(null, res);
    }
  })
}

module.exports = BookingEntity;