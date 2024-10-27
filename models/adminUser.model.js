const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  isAdmin: { type: Boolean },
  roles: { type: Array },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
  lastLoggedInAt: { type: Number },
});

module.exports = mongoose.model('AdminUser', AdminUserSchema);
