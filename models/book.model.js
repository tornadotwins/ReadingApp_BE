const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Library = require('./library.model');

const BookSchema = new Schema({
  number: { type: Number },
  title: { type: Object },
  coverImage: { type: String },
  markImage: {type: String},
  library: { type: Schema.Types.ObjectId, ref: 'Library' },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('Book', BookSchema);
