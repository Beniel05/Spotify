import { Router } from "express";
import { checkAdmin, createSong, deleteSong, createAlbum, deleteAlbum } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

// this will get true ( get passed ) before those those controllers
router.use(protectRoute, requireAdmin);
// eg. router.get("/check", protectRoute, requireAdmin, checkAdmin)

router.get("/check", checkAdmin)

router.post('/songs', createSong); 
router.delete("/songs/:id", deleteSong);

router.post('/albums', createAlbum); 
router.delete("/albums/:id", deleteAlbum);

export default router;