const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  privateNumber: Number,
  name: String,
  lastName: String,
  birthData: Date,
});

module.exports = mongoose.model("Users", UserSchema);
