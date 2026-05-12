import { Router } from "express";
import { SignUp } from "../controller/user.controller.js";

const router = Router();

router.post("/signup", SignUp)

export default router;