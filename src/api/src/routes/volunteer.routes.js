const express = require('express');
const router = express.Router();
const volunteerController = require('../ui/controllers/volunteer.controller');

// Retrieve all volunteers
router.get('/', volunteerController.findAll);

// Retrieve a single volunteer with id
router.get('/:id', volunteerController.findById);

// Retrieve availability of volunteer
router.get('/:id/availability', volunteerController.getAvailabilityById);

// Retrieve activities of volunteer
router.get('/:id/activities', volunteerController.getActivitiesById);

module.exports = router;