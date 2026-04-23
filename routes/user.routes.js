const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");
const auth = require("../middleware/auth");
const isAdmin = require("../middleware/admin");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/profile", auth, controller.profile);

router.put("/updateprofile", auth, controller.updateProfile);
router.patch("/profile/picture", auth, controller.updatePicture);
router.get("/", auth, isAdmin, controller.getAll);

router.patch("/:id/block", auth, isAdmin, controller.block);

module.exports = router;
