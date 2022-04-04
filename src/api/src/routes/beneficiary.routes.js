const express = require('express');
const router = express.Router();
const beneficiaryController = require('../ui/controllers/beneficiary.controller');

// Retrieve activities of beneficiary
router.get('/:id/activities', beneficiaryController.getActivitiesById);

// Retrieve volunteers of beneficiary with same activities
router.get('/:id/volunteers', beneficiaryController.getVolunteersById);

// Add activity to beneficiary
router.post('/:beneficiaryId/activities/:activityId', beneficiaryController.insertActivityById);

// Delete activity of beneficiary
router.delete('/:beneficiaryId/activities/:activityId', beneficiaryController.deleteActivityById);

module.exports = router;