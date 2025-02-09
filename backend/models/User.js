const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name is required
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 6 } // Password must be at least 6 chars
});

module.exports = mongoose.model("User", UserSchema);
