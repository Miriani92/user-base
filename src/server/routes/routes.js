const express = require("express");
const router = express.Router();
const {
  getUsersList,
  filterUsers,
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
} = require("../controllers/userBase");

router.route("/").get(getUsersList).post(addUser);
router
  .route("/category")
  .get(getCategoryList)
  .post(addCategory)
  .patch(editCategory);
router.route("/status").get(getStatusList).post(addStatus).patch(editStatus);
router.route("/userlist").post(filterUsers);

router.route("/category/:id").delete(deleteCategory);
router.route("/status/:id").delete(deleteStatus);
router.route("/:id").get(getUser).patch(editUser).delete(deleteUser);

module.exports = router;
