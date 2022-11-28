const User = require("../models/user");

const getUsersList = async (req, res) => {
  res.send("all users");
};
const getUser = async (req, res) => {
  res.send("user");
};
const editUser = async (req, res) => {
  res.send("edit user");
};
const deleteUser = async (req, res) => {
  res.send("delete user");
};
const addUser = async (req, res) => {
  const users = await User.create({ name: "miriani" });
  res.send(users);
};
const getStatusList = async (req, res) => {
  res.send("all status");
};
const addStatus = async (req, res) => {
  res.send("add status");
};
const editStatus = async (req, res) => {
  res.send("edit status");
};
const deleteStatus = async (req, res) => {
  res.send("delete status");
};
const getCategoryList = async (req, res) => {
  res.send("all categoris");
};
const addCategory = async (req, res) => {
  res.send("add category");
};
const editCategory = async (req, res) => {
  res.send("edit category");
};
const deleteCategory = async (req, res) => {
  res.send("delete category");
};

module.exports = {
  getUsersList,
  getUser,
  editUser,
  deleteUser,
  addUser,
  getStatusList,
  addStatus,
  editStatus,
  deleteStatus,
  getCategoryList,
  addCategory,
  editCategory,
  deleteCategory,
};
