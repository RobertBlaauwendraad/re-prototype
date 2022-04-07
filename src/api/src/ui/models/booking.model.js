'use strict';

const BookingModel = function (booking) {
  this.id = booking.id;
  this.firstName = booking.firstName;
  this.lastName = booking.lastName;
  this.email = booking.email;
  this.phoneNumber = booking.phoneNumber;
  this.consentSharingBeneficiaryEmail = booking.consentSharingBeneficiaryEmail;
  this.consentSharingBeneficiaryPhone = booking.consentSharingBeneficiaryPhone;
  this.consentSharingVolunteerEmail = booking.consentSharingVolunteerEmail;
  this.consentSharingVolunteerPhone = booking.consentSharingVolunteerPhone;
}

module.exports = BookingModel;