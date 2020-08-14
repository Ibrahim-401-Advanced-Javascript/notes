'use strict';

const mongoose = require('mongoose');

const Notes = mongoose.Schema({
  text: { type: String, required: true },
  category: { type: String, default: 'general', required: true },
});

module.exports = mongoose.model('notes', Notes);