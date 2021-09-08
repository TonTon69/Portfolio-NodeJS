const express = require("express");
const router = express.Router();

const authController = require("../app/controllers/AuthController");
const { authValidate } = require("../app/middlewares/AuthMiddleware");

router.get("/login", authController.login);
router.post("/login", authValidate, authController.postLogin);
router.get("/logout", authController.logout);
router.get("/password/reset", authController.passwordReset);
router.post("/password/reset", authController.postPasswordReset);
router.get("/reset/confirm/:token", authController.resetConfirm);
router.post("/reset/confirm/:token", authController.postResetConfirm);

module.exports = router;
