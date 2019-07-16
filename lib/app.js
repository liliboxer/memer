const express = require('express');
const notFound = require('../lib/middleware/not-found');
const error = require('../lib/middleware/error');
const app = express();

app.use(express.json());

// middleware functions 
app.use(notFound);
app.use(error);

module.exports = app;
