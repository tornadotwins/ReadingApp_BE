const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubBookSchema = new Schema({
  title: { type: String },
  book: { type: Schema.Types.ObjectId, ref: 'Book' },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

const subBook = mongoose.model('SubBook', SubBookSchema);

export default subBook;
