import { Router } from "express";
import { sendMessage } from "../controller/message.controller.js";
import { SecureRoute } from "../middleware/SecureRoute.js";


const router = Router();


router.post("/send/:id", SecureRoute, sendMessage)


export default router;