const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String, select: false },
  blocked: { type: Boolean, default: false },
  loginAt: { type: Number, default: Date.now() },
  createdAt: { type: Number, default: Date.now() },
});

const User = mongoose.model("User", UserSchema);

export default User;
 