const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import User from './user.model';
import Chapter from './chapter.model';

const HistorySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  chapter: { type: Schema.Types.ObjectId, ref: 'Chapter' },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

const History = mongoose.model('History', HistorySchema);

export default History;
