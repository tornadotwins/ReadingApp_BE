const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import Library from '../models/library.model';

const BookSchema = new Schema({
  title: { type: Object },
  coverImage: { type: String },
  library: { type: Schema.Types.ObjectId, ref: 'Library' },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

const Book = mongoose.model('Book', BookSchema);

export default Book;
