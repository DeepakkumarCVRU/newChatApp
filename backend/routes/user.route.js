import { Router } from "express";
import { Login, SignUp, LogOut } from "../controller/user.controller.js";

const router = Router();

router.post("/signup", SignUp)
router.post("/login", Login)
router.post("/logout", LogOut)

export default router;