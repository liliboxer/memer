const mongoose = require('mongoose');

const bagSchema = new mongoose.Schema({
  type: String,
  material: String,
  numberOfStraps: Number,
  size: String
  
});

module.exports = mongoose.model('Bag', bagSchema);
