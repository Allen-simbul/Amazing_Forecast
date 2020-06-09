const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

const Code = mongoose.model('Codes', codeSchema);

module.exports = Code;
