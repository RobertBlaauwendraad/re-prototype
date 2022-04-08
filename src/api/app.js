const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config({path: './.env.local'});

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

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})