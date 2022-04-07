const express = require('express');
const router = express.Router();
const beneficiaryController = require('../ui/controllers/beneficiary.controller');

// Retrieve activities of beneficiary
router.get('/:id/activities', beneficiaryController.getActivities);

// Retrieve volunteers of beneficiary with same activities
router.get('/:id/volunteers', beneficiaryController.getVolunteers);

// Retrieve volunteers with bookings of beneficiary
router.get('/:id/bookings', beneficiaryController.getBookings);

// Add activity to beneficiary
router.post('/:beneficiaryId/activities/:activityId', beneficiaryController.insertActivity);

// Delete activity of beneficiary
router.delete('/:beneficiaryId/activities/:activityId', beneficiaryController.deleteActivity);

module.exports = router;