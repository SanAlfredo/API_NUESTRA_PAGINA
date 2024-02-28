import { Router } from "express";
import { llenar } from "../controllers/llenar.controller.js";

const llenador = Router();
llenador.get("/llenar", llenar);

export default llenador;
