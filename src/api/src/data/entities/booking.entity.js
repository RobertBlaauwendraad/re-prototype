'use strict';

const dbConnector = require("../../../config/db.config");

const Booking = function (booking) {
  this.availabilityId = booking.availabilityId;
  this.activityId = booking.activityId;
  this.consentForEmailContact = false;
  this.consentForPhoneContact = false;
};

Booking.create = function (newBooking, result) {
  dbConnector.query("INSERT INTO Booking set ?", newBooking, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    } else{
      result(null, res);
    }
  })
}

module.exports = Booking;