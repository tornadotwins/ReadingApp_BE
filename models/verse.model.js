const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VerseSchema = new Schema({
  subBook: { type: Schema.Types.ObjectId, ref: 'Chapter' },
  text: { type: Object },
  audio_start: { type: Number },
  header: { type: String },
  reference: { type: Object },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

const Verse = mongoose.model('Verse', VerseSchema);

export default Verse;
