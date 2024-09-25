const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
  chapterNumber: { type: Number },
  subBook: { type: Schema.Types.ObjectId, ref: 'SubBook' },
  audio: { type: Object },
  isTranslated: {type: Boolean},
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

const Chapter = mongoose.model('Chapter', ChapterSchema);

export default Chapter;
