import { Router } from "express";

const router = Router();

router.get('/', (req,res) => {
    req.auth.userId
    res.send("UserRoute with GET method");
});

export default router;