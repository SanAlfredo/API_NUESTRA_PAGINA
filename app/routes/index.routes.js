import { Router } from "express";
import { ping, index } from "../controllers/index.controller.js";

const router = Router();

router.get("/ping", ping);
router.get("/", index);

export default router;