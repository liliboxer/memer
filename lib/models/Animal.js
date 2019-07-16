const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  type: String,
  legs: Number,
  fluffy: Boolean
});

module.exports = mongoose.model('Animal', animalSchema);
