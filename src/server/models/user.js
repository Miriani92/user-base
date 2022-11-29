const mongoose = require("mongoose");

const UserCategorySchema = new mongoose.Schema({
  name: String,
});
const UserStatusSchema = new mongoose.Schema({
  name: String,
});
const UserSchema = new mongoose.Schema({
  email: String,
  privateNumber: Number,
  name: String,
  lastName: String,
  birthData: Date,
  category: UserCategorySchema,
  status: UserStatusSchema,
});

const Models = {
  userModel: mongoose.model("Users", UserSchema),
  categorytModel: mongoose.model("Categories", UserCategorySchema),
  statusModel: mongoose.model("Statuses", UserStatusSchema),
};

module.exports = { ...Models };
