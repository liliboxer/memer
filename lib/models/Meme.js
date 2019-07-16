const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  topField: String,
  image: {
    type: String,
    rquired: true
  },
  bottomField: String
});

module.exports = mongoose.model('Meme', memeSchema);
