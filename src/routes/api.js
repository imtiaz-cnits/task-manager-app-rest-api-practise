const express = require("express");
const UserController = require("../controllers/UserController");
const TaskController = require("../controllers/TaskController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.get("/verifyEmail/:email", UserController.verifyEmail);
router.get("/verifyOTP/:email/:otp", UserController.verifyOTP);
router.get("/passwordReset/:email/:otp/:password", UserController.passwordReset);


// After Login
router.get("/profileDetails", AuthMiddleware, UserController.profileDetails);
router.post("/profileUpdate", AuthMiddleware, UserController.profileUpdate);


// Task Create, Task Update, Task Delete, Task Read
router.post("/task/create", AuthMiddleware, TaskController.create);
router.post("/task/update/:id", AuthMiddleware, TaskController.update);
router.get("/task/read", AuthMiddleware, TaskController.read);
router.delete("/task/delete/:id", AuthMiddleware, TaskController.delete);


module.exports = router;
