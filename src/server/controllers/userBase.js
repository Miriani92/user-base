const { userModel, statusModel, categorytModel } = require("../models/user");
const { queryUserList, queryList } = require("../utils/queryList");

const getUsersList = async (req, res) => {
  try {
    const usersList = await userModel.find({});
    res.status(200).json({ usersList });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const filterUsers = async (req, res) => {
  const query = queryUserList(req.body);
  try {
    const filterdUsersList = await userModel.find(query);

    res.status(200).json({ filterdUsersList });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await userModel.findOne({ _id: userID });
    if (!user) {
      return res.status(404).json({ msg: "no user with this id" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editUser = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await userModel.findOneAndUpdate({ _id: userId }, req.body);
    if (!user) {
      return res.status(404).json({ msg: "no user with this id" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await userModel.findOneAndDelete({ _id: userID });
    if (!user) {
      return res.status(404).json({ msg: "no user with this id" });
    }

    const updatedUsers = await userModel.find();
    res.status(200).json({ updatedUsers });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const addUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getStatusList = async (req, res) => {
  let query;
  if (req.body.name) {
    query = queryList(req.body);
  } else {
    query = {};
  }
  console.log(query);
  try {
    const statusList = await statusModel.find(query);
    res.status(200).json({ statusList });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const addStatus = async (req, res) => {
  const addedStatus = req.body.name;

  try {
    await statusModel.create(addedStatus);
    const updatedStatus = await statusModel.find();
    res.status(201).json({ updatedStatus });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const editStatus = async (req, res) => {
  const { _id: categoryID } = req.body;
  const updatedStatus = req.body.name;
  try {
    const status = await statusModel.findOneAndUpdate(
      { _id: categoryID },
      updatedStatus
    );
    if (!status) {
      return res.status(404).json({ msg: "no user with this id" });
    }
    const updatedStatuses = await statusModel.find();

    res.status(200).json({ updatedStatuses });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteStatus = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const status = await statusModel.findOneAndDelete({ _id: userID });
    if (!status) {
      return res.status(404).json({ msg: "no user with this id" });
    }

    res.status(200).json({ status });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getCategoryList = async (req, res) => {
  let query;
  if (req.body.name) {
    query = queryList(req.body);
  } else {
    query = {};
  }

  try {
    const categoryList = await categorytModel.find(query);
    res.status(200).json({ categoryList });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const addCategory = async (req, res) => {
  const addedCategory = req.body.name;

  try {
    await categorytModel.create(addedCategory);
    const updatedCategory = await userModel.find();
    res.status(201).json({ updatedCategory });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editCategory = async (req, res) => {
  const { _id: categoryID } = req.body;
  const updatedCategory = req.body.name;
  try {
    const category = await categorytModel.findOneAndUpdate(
      { _id: categoryID },
      updatedCategory
    );
    if (!category) {
      return res.status(404).json({ msg: "no user with this id" });
    }
    const updatedCategories = await categorytModel.find();

    res.status(200).json({ updatedCategories });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const category = await categorytModel.findOneAndDelete({ _id: userID });
    if (!category) {
      return res.status(404).json({ msg: "no user with this id" });
    }
    const updatedCategroy = await categorytModel.find();
    res.status(200).json({ updatedCategroy });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
  filterUsers,
};
