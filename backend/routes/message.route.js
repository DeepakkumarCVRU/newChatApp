import { Router } from "express";
import { getMessage, sendMessage } from "../controller/message.controller.js";
import { SecureRoute } from "../middleware/SecureRoute.js";


const router = Router();


router.post("/send/:id", SecureRoute, sendMessage)
router.get("/get/:id", SecureRoute, getMessage)


export default router;