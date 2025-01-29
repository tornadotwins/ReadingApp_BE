const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JourneySchema = new Schema({
  number: { type: Number },
  parent: {
    type: Schema.Types.ObjectId,
    refPath: 'parentModel',
  },
  parentModel: {
    type: String,
    required: true,
    enum: ['Book', 'Journey'],
  },
  depth: { type: Number, default: 1 },
  isArticle: { type: Boolean },
  title: { type: Object },

  image: { type: Object },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('Journey', JourneySchema);
