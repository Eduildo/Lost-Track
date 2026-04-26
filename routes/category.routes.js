const express = require("express");
const router = express.Router();
const isAdmin = require("../middleware/admin");

const auth = require("../middleware/auth");

const controller = require("../controllers/category.controller");

router.get("/", auth, controller.getAll);

// admin
router.post("/new", auth, isAdmin, controller.crateCategory);
router.put("/:id", auth, isAdmin, controller.update);
router.delete("/:id", auth, isAdmin, controller.delete);

module.exports = router;
