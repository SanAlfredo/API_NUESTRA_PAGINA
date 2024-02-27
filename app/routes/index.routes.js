import { Router } from "express";
import { ping, index, llenar } from "../controllers/index.controller.js";

const router = Router();

router.get("/ping", ping);
router.get("/", index);
router.get("/llenar", llenar);

export default router;
