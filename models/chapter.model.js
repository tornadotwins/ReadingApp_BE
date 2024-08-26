const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
  chapter_number: { type: Number },
  subBook: { type: Schema.Types.ObjectId, ref: 'SubBook' },
  audio: { type: String },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

const Chapter = mongoose.model('Chapter', ChapterSchema);

export default Chapter;
