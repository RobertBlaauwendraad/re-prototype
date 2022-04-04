const express = require('express');
const router = express.Router();
const activityController = require('../ui/controllers/activity.controller');

// Retrieve all activities
router.get('/', activityController.findAll);

module.exports = router;