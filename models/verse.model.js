const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VerseSchema = new Schema({
  chapter: { type: Schema.Types.ObjectId, ref: 'Chapter' },
  text: {
    type: Map,
    of: String,
  },
  number: { type: Number },
  audioStart: { type: Object },
  header: { type: Object },
  reference: { type: Object },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

// Create a text index on the 'text' field
VerseSchema.index({ 'text.en': 'text', 'text.ar': 'text' });

module.exports = mongoose.model('Verse', VerseSchema);
