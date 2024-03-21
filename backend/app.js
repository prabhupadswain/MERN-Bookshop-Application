const express = require('express');

// Import environment file configurations
require('dotenv').config();

// Create an express app
const app = express();

app.use('/', (req, res) => res.send('OK from server'));

module.exports = app;
