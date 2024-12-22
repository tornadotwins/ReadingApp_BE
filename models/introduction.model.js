const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntroductionSchema = new Schema({
  chapter: { type: Schema.Types.ObjectId, ref: 'Chapter' },
  text: { type: Object },
  image: { type: Object },
  number: { type: Number },
  isCollapse: { type: Boolean },
  title: { type: Object },
  content: { type: Array },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

// Create a text index on the 'text' field
IntroductionSchema.index({ 'text.en': 'text', 'text.ar': 'text' });

module.exports = mongoose.model('Introduction', IntroductionSchema);
