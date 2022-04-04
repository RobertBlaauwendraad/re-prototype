const express = require('express');
const router = express.Router();
const bookingController = require('../ui/controllers/booking.controller');

// Create new booking
router.post('/', bookingController.create);

module.exports = router;