const express = require("express");
const router = express.Router();

const awardController = require("../app/controllers/AwardController");

router.get("/create", awardController.create);
router.post("/create", awardController.postCreate);
router.get("/:id/edit", awardController.edit);
router.put("/:id", awardController.update);
router.patch("/:id/restore", awardController.restore);
router.delete("/:id", awardController.delete);
router.delete("/:id/force", awardController.forceDelete);

module.exports = router;
