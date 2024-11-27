const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppTextPageSchema = new Schema({
  title: { type: String },
  number: { type: Number },
  isCompleted: { type: Object },
  isPublished: { type: Object },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('AppTextPage', AppTextPageSchema);
