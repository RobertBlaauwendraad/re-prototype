const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Create express app
const app = express()

// Setup server port
const port = process.env.PORT || 3000

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

// Use activity routes
const activityRoutes = require('./src/routes/activity.routes')
app.use('/api/v1/activities', activityRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})