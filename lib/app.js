const express = require('express');
const cors = require('cors');

const notFound = require('../lib/middleware/not-found');
const error = require('../lib/middleware/error');

//added resurces 
const animalRoutes = require('./routes/animals');
const bagRoutes = require('./routes/bags');

const memeRoutes = require('./routes/memes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1/memes', memeRoutes);

// added resources
app.use('/api/v1/animals', animalRoutes);
app.use('/api/v1/bags', bagRoutes);


// middleware functions 
app.use(notFound);
app.use(error);

module.exports = app;
