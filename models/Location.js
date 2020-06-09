const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: false,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  coord: {
    lon: {
      type: Number,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
  },
});

const Location = mongoose.model('Locations', locationSchema);

module.exports = Location;
