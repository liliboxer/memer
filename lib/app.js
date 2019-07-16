const express = require('express');
const cors = require('cors');


const notFound = require('../lib/middleware/not-found');
const error = require('../lib/middleware/error');

const memeRoutes = require('./routes/memes');
const app = express();


app.use(cors);

app.use(express.json());
app.use('/api/v1/memes', memeRoutes);

// middleware functions 
app.use(notFound);
app.use(error);

module.exports = app;
