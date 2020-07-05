const mongoose = require('mongoose');

const searchTermSchema = new mongoose.Schema({
  currentSearchTerm: {
    type: Boolean,
    default: false,
  },
  searchTerm: {
    type: String,
  },
  location_id: {
    type: Number,
  },
});

const Term = mongoose.model('Terms', searchTermSchema);

module.exports = Term;
