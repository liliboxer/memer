const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  meal: String,
  like: Number
});

module.exports = mongoose.model('Food', foodSchema);
