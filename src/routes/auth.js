const express = require("express");
const router = express.Router();

const authController = require("../app/controllers/AuthController");
const { authValidate } = require("../app/middlewares/AuthMiddleware");

router.get("/login", authController.login);
router.post("/login", authValidate, authController.postLogin);
router.get("/logout", authController.logout);

module.exports = router;
