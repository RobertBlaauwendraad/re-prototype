'use strict';

const mysql = require('mysql2');
require('dotenv').config({path: './.env.local'});

// Local mysql db connection
const dbConnector = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

dbConnector.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!")
});

module.exports = dbConnector;