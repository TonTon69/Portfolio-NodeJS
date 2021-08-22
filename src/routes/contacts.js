const express = require("express");
const router = express.Router();

const contactController = require("../app/controllers/ContactController");

router.get("/create", contactController.create);
router.post("/create", contactController.postCreate);
router.post("/handle-form-actions", contactController.handleFormActions);
router.get("/:id/edit", contactController.edit);
router.put("/:id", contactController.update);
router.patch("/:id/restore", contactController.restore);
router.delete("/:id", contactController.delete);
router.delete("/:id/force", contactController.forceDelete);

module.exports = router;
