const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user.model');
const Chapter = require('./chapter.model');

const HistorySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  chapter: { type: Schema.Types.ObjectId, ref: 'Chapter' },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('History', HistorySchema);
