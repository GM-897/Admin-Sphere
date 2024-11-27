const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/userController");
const { verifyCoachOrOwner } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getUsers);
router.post("/", verifyCoachOrOwner, createUser);
router.put("/:id", verifyCoachOrOwner, updateUser);
router.delete("/:id", verifyCoachOrOwner, deleteUser);
router.get("/:id", getUserById);

module.exports = router;
