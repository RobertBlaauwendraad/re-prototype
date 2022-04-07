'use strict';

const BeneficiaryEntity = require('../../data/entities/beneficiary.entity');
const BookingModel = require('../../ui/models/booking.model');

exports.getActivities = function (req, res) {
  BeneficiaryEntity.getActivities(req.params.id, function (err, activities) {
    if (err) {
      res.send(err);
    }
    res.send(activities);
  })
}

exports.getVolunteers = function (req, res) {
  BeneficiaryEntity.getVolunteers(req.params.id, function (err, volunteers) {
    if (err) {
      res.send(err);
    }
    res.send(volunteers);
  })
}

exports.getBookings = function (req, res) {
  BeneficiaryEntity.getBookings(req.params.id, function (err, bookings) {
    if (err) {
      res.send(err);
    }
    const bookingModels = [];
    for (const booking of bookings) {
      const bookingModel = new BookingModel(booking);
      if (!booking.consentSharingVolunteerEmail) {
        delete bookingModel.email
      }
      if (!booking.consentSharingVolunteerPhone) {
        delete bookingModel.phoneNumber
      }
      bookingModels.push(bookingModel);
    }
    res.send(bookingModels);
  })
}

exports.insertActivity = function (req, res) {
  BeneficiaryEntity.insertActivity(req.params.beneficiaryId, req.params.activityId, function (err, result) {
    if (err) {
      throw new Error(err)
    }
    res.send(result);
  })
}

exports.deleteActivity = function (req, res) {
  BeneficiaryEntity.deleteActivity(req.params.beneficiaryId, req.params.activityId, function (err, result) {
    if (err) {
      throw new Error(err)
    }
    res.send(result);
  })
}

exports.shareEmail = function (req, res) {
  BeneficiaryEntity.shareEmail(req.params.id, function (err, result) {
    if (err) {
      throw new Error(err)
    }
    res.send(result);
  })
}

exports.sharePhone = function (req, res) {
  BeneficiaryEntity.sharePhone(req.params.id, function (err, result) {
    if (err) {
      throw new Error(err)
    }
    res.send(result);
  })
}