const express = require('express');

// Import environment file configurations
const dotenv = require('dotenv').config();

// Create an express app
const app = express();

// Middleware handling requests
app.use('/', (req, res) => res.send('OK from server'));

module.exports = app;
