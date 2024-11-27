const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AppTextPage = require('./appTextPage.model');

const AppTextSchema = new Schema({
  variable: { type: String },
  image: { type: String },
  page: { type: Schema.Types.ObjectId, ref: 'AppTextPage' },
  text: { type: Object },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('AppText', AppTextSchema);
