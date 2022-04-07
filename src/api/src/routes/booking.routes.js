const express = require('express');
const router = express.Router();
const bookingController = require('../ui/controllers/booking.controller');
const beneficiaryController = require("../ui/controllers/beneficiary.controller");

// Create new booking
router.post('/', bookingController.create);

// Allowing sharing of beneficiaries' email
router.put('/:id/share-email', beneficiaryController.shareEmail);

// Allowing sharing of beneficiaries' phone
router.put('/:id/share-phone', beneficiaryController.sharePhone);

module.exports = router;