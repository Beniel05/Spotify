import { Router } from "express";
import { getAdmin } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get('/', protectRoute, requireAdmin, createSong); 
// The work related to 'createSong' will be started in the Day-5 (Tomorrow)

export default router;