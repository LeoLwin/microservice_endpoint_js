import express from "express";
import user from "./userController.js";

const router = express.Router();
router.use("/blog", user);

export default router;
