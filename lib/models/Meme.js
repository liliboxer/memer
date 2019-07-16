const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
  top: {
    type: String,
    rquired: true
  },
  image: {
    type: String,
    rquired: true
  },
  bottom: {
    type: String,
    rquired: true
  },
});

module.exports = mongoose.model('Meme', memeSchema);
