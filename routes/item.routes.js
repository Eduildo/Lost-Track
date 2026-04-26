const express = require("express");
const router = express.Router();

const controller = require("../controllers/item.controller");
const auth = require("../middleware/auth");

router.post("/new", auth, controller.create);

module.exports = router;
