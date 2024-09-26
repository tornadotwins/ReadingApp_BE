const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('../models/user.model');
const Verse = require('../models/verse.model');

const BookmarkSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  verse: { type: Schema.Types.ObjectId, ref: 'Verse' },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('Bookmark', BookmarkSchema);
