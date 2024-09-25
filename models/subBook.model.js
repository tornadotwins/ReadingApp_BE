const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import Book from './book.model';

const SubBookSchema = new Schema({
  number: { type: Number },
  title: { type: Object },
  book: { type: Schema.Types.ObjectId, ref: 'Book' },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

const SubBook = mongoose.model('SubBook', SubBookSchema);

export default SubBook;
