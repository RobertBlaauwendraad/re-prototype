const express = require('express');
const router = express.Router();
const beneficiaryController = require('../ui/controllers/beneficiary.controller');

// Retrieve activities of beneficiary
router.get('/:id/activities', beneficiaryController.getActivitiesById);

module.exports = router;