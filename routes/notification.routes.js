const express = require("express");
const router = express.Router();
const controller = require("../controllers/notificatio.controller");
const auth = require("../middleware/auth");

router.get("/", auth, controller.getAll);
router.patch("/:id/read", auth, controller.read);
router.delete("/:id", auth, controller.delete);

module.exports = router;
