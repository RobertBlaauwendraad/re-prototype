'use strict';

const BookingEntity = require('../../data/entities/booking.entity');

exports.create = function (req, res) {
  const new_booking = new BookingEntity(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: 'Please provide correct booking'
    });
  } else {
    BookingEntity.create(new_booking, function (err, booking) {
      if (err) {
        res.send(err);
      }
      res.json({
        error: false,
        message:"Employee added successfully!",
        data:booking
      });
    })
  }
}