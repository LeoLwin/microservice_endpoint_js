const express = require("express");
const user = require("./userController");

const router = express.Router();
router.use("/user", user);

module.exports = router;
