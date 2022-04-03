const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteer.controller');

// Retrieve all volunteers
router.get('/', volunteerController.findAll);

module.exports = router;