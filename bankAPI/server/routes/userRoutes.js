const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const tokenValidation = require("../middleware/tokenValidation");
const userService = require("../services/userService");

router.post("/signup", userController.createUser);

router.post("/login", userController.loginUser);

router.post(
  "/profile",
  tokenValidation.validateToken,
  userController.getUserProfile
);

router.put(
  "/profile",
  tokenValidation.validateToken,
  userController.updateUserProfile
);

router.post(
  "/validatetoken",
  tokenValidation.validateToken,
  userController.validateToken
);

module.exports = router;
