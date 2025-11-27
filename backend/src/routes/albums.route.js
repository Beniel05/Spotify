import { Router } from "express";
import { getAllAlbums, getAlbumnById } from "../controller/album.controller.js";

const router = Router();

router.get('/', getAllAlbums);
router.get('/:albumId', getAlbumnById);

export default router;