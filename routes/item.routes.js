const express = require("express");
const router = express.Router();

const controller = require("../controllers/item.controller");
const auth = require("../middleware/auth");

router.get("/", controller.getAll);
router.get("/match/:id", controller.match);
router.get("/my-items", auth, controller.myItems);
router.get("/:id", controller.getById);

router.post("/new", auth, controller.create);
router.put("/update/:id", auth, controller.update);
router.delete("/:id", auth, controller.delete);

router.patch("/:id/status", auth, controller.updateStatus);

module.exports = router;
