const express = require("express");
const user = require("./userController");

const router = express.Router();
router.use("/blog", user);

module.exports = router;
