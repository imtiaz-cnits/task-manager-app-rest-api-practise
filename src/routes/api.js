const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/profileUpdate", UserController.profileUpdate);
router.get("/RecoverVerifyEmail/:email", UserController.verifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp", UserController.verifyOTP);
router.get(
  "/RecoverResetPass/:email/:otp/:password",
  UserController.passwordReset
);

module.exports = router;
