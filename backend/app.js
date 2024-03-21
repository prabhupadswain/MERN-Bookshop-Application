const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');

// Import environment file configurations
const dotenv = require('dotenv').config();

// Create an express app
const app = express();

// Database Connection
connectDB();

// Middleware handling requests
app.use('/', (req, res) => res.send('OK from server'));

module.exports = app;
