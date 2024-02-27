import { Router } from "express";
import {
  create,
} from "../controllers/relaciones.controller.js";

const relacion = Router();

relacion.post("/crear-usuario", create);
// roles.get("/roles", list);
// roles.get("/roles/:id", detail);
// roles.put("/roles/:id", update);
// roles.delete("/roles/:id", borrar);

export default relacion;