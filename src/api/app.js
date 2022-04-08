const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const https = require("https")
const http = require("http");
const fs = require("fs");
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env.local') });

// Create express app
const app = express()

// Setup server port
const port = process.env.API_PORT || 3000

// Parse requests of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// Parse requests of content-type - application/json
app.use(bodyParser.json())

// Use cors
app.use(cors())

// Root route
app.get('/', (req, res) => {
  res.send('Prototype REST API')
})

// Use volunteer routes
const volunteerRoutes = require('./src/routes/volunteer.routes')
app.use('/api/v1/volunteers', volunteerRoutes)

// Use beneficiary routes
const beneficiaryRoutes = require('./src/routes/beneficiary.routes')
app.use('/api/v1/beneficiaries', beneficiaryRoutes)

// Use activity routes
const activityRoutes = require('./src/routes/activity.routes')
app.use('/api/v1/activities', activityRoutes)

const bookingRoutes = require('./src/routes/booking.routes')
app.use('/api/v1/bookings', bookingRoutes)

if (process.env.ENV === "production") {
  const options = {
    key: fs.readFileSync(process.env.KEY_LOCATION),
    cert: fs.readFileSync(process.env.CERT_LOCATION),
    passphrase: process.env.CERT_PASSWORD
  };
  https.createServer(options, app).listen(port);
} else {
  http.createServer(app).listen(port);
}