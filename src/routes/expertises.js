const express = require("express");
const router = express.Router();

const expertiseController = require("../app/controllers/ExpertiseController");

router.get("/create", expertiseController.create);
router.post("/create", expertiseController.postCreate);
router.post("/handle-form-actions", expertiseController.handleFormActions);
router.get("/:id/edit", expertiseController.edit);
router.put("/:id", expertiseController.update);
router.patch("/:id/restore", expertiseController.restore);
router.delete("/:id", expertiseController.delete);
router.delete("/:id/force", expertiseController.forceDelete);

module.exports = router;
