const mongoose = require("mongoose");

const UserCategorySchema = new mongoose.Schema({
  name: String,
});
const UserStatusSchema = new mongoose.Schema({
  name: String,
});
const UserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  privateNumber: Number,
  birthDate: Number,
  category: String,
  status: String,
});

const Models = {
  userModel: mongoose.model("Users", UserSchema),
  categorytModel: mongoose.model("Categories", UserCategorySchema),
  statusModel: mongoose.model("Statuses", UserStatusSchema),
};

module.exports = { ...Models };
