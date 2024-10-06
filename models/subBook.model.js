const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = require('./book.model');

const SubBookSchema = new Schema({
  number: { type: Number },
  title: { type: Object },
  book: { type: Schema.Types.ObjectId, ref: 'Book' },
  noChapter: { type: Boolean, default: false },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('SubBook', SubBookSchema);
