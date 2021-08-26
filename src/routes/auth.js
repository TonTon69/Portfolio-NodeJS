const express = require("express");
const router = express.Router();

const authController = require("../app/controllers/AuthController");
const authMiddleware = require("../app/middlewares/AuthMiddleware");

router.get("/login", authController.login);
router.post("/login", authMiddleware.authValidate, authController.postLogin);
router.get("/logout", authController.logout);

module.exports = router;
