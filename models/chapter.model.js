const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
  chapterNumber: { type: Number },
  subBook: { type: Schema.Types.ObjectId, ref: 'SubBook' },
  audio: { type: Array },
  isTranslated: {type: Object},
  isCompleted: {type: Object},
  isPublished: {type: Object},
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('Chapter', ChapterSchema);
