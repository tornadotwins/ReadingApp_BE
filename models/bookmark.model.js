const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import User from '../models/user.model';
import Verse from '../models/verse.model';

const BookmarkSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  verse: { type: Schema.Types.ObjectId, ref: 'Verse' },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

const Bookmark = mongoose.model('Bookmark', BookmarkSchema);

export default Bookmark;
