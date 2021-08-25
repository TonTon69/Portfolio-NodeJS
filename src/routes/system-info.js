const express = require("express");
const router = express.Router();

const systemInfoController = require("../app/controllers/SystemInfoController");

router.get("/create", systemInfoController.create);
router.post("/create", systemInfoController.postCreate);
router.post("/handle-form-actions", systemInfoController.handleFormActions);
router.get("/:id/edit", systemInfoController.edit);
router.put("/:id", systemInfoController.update);
router.patch("/:id/restore", systemInfoController.restore);
router.delete("/:id", systemInfoController.delete);
router.delete("/:id/force", systemInfoController.forceDelete);

module.exports = router;
