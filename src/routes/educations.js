const express = require("express");
const router = express.Router();

const educationController = require("../app/controllers/EducationController");

router.get("/create", educationController.create);
router.post("/create", educationController.postCreate);
router.post("/handle-form-actions", educationController.handleFormActions);
router.get("/:id/edit", educationController.edit);
router.put("/:id", educationController.update);
router.patch("/:id/restore", educationController.restore);
router.delete("/:id", educationController.delete);
router.delete("/:id/force", educationController.forceDelete);

module.exports = router;
