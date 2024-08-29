const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VerseSchema = new Schema({
  chapter: { type: Schema.Types.ObjectId, ref: 'Chapter' },
  text: {
    en: { type: String },
    ar: { type: String }
  },
  number: { type: Number },
  audio_start: { type: Number },
  header: { type: String },
  reference: { type: Object },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

// Create a text index on the 'text' field
VerseSchema.index({ 'text.en': 'text', 'text.ar': 'text' });

const Verse = mongoose.model('Verse', VerseSchema);

export default Verse;
