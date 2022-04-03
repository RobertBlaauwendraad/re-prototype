const express = require('express')
const bodyParser = require('body-parser')

// Create express app
const app = express()

// Setup server port
const port = process.env.PORT || 3000

// Parse requests of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// Parse requests of content-type - application/json
app.use(bodyParser.json())

// Root route
app.get('/', (req, res) => {
  res.send('Prototype REST API')
})

// Require volunteer routes
const volunteerRoutes = require('./src/routes/volunteer.routes')
// Using as middleware
app.use('/api/v1/volunteers', volunteerRoutes)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})