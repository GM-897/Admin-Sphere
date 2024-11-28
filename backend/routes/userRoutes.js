const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/userController");
// const { verifyCoachOrOwner } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getUsers);
router.post("/",createUser);
router.put("/update/:id",updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUserById);

module.exports = router;
//Made By Manmohit