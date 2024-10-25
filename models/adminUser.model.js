const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  isAdmin: { type: Boolean },
  role: { type: Array },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
  loggedIn: { type: Number, default: Date.now() },
});

module.exports = mongoose.model('AdminUser', AdminUserSchema);
