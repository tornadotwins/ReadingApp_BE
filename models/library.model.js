const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
  title: { type: Object },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('Library', LibrarySchema);
