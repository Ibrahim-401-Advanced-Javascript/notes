'use strict';

const mongoose = require('mongoose');

const Notes = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, default: 'general', required: false },
});

module.exports = mongoose.model('notes', Notes);