import { Router } from "express";
import { Login, SignUp, LogOut, getUserProfile } from "../controller/user.controller.js";
import { get } from "mongoose";

const router = Router();

router.post("/signup", SignUp)
router.post("/login", Login)
router.post("/logout", LogOut)
router.get("/getUserprofile", getUserProfile)

export default router;