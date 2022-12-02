const { userModel, statusModel, categorytModel } = require("../models/user");
const queryList = require("../utils/queryList");
const getUsersList = async (req, res) => {
  try {
    const usersList = await userModel.find({});
    res.status(200).json({ usersList });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const filterUsers = async (req, res) => {
  const query = queryList(req.body);
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

    res.status(200).json({ user });
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
  try {
    const statusList = await statusModel.find({});
    res.status(200).json({ statusList });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const addStatus = async (req, res) => {
  try {
    const status = await statusModel.create(req.body);
    res.status(201).json({ status });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const editStatus = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const status = await statusModel.findOneAndUpdate(
      { _id: userId },
      req.body
    );
    if (!status) {
      return res.status(404).json({ msg: "no user with this id" });
    }
    res.status(200).json({ status });
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
  try {
    const categoryList = await categorytModel.find({});
    res.status(200).json({ categoryList });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const addCategory = async (req, res) => {
  try {
    const category = await categorytModel.create(req.body);
    res.status(201).json({ category });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editCategory = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const category = await categorytModel.findOneAndUpdate(
      { _id: userId },
      req.body
    );
    if (!category) {
      return res.status(404).json({ msg: "no user with this id" });
    }
    res.status(200).json({ category });
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
    res.status(200).json({ category });
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
