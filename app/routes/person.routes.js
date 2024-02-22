import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
  buscarNombre,
  buscarCelular,
  buscarCorreo,
} from "../controllers/person.controller.js";

const personas = Router();

personas.post("/personas", create);
personas.get("/personas", list);
personas.get("/personas/:id", detail);
personas.put("/personas/:id", update);
personas.delete("/personas/:id", borrar);
personas.get("/personas/buscarNombre/:nombre", buscarNombre);
personas.get("/personas/buscarCelular/:celular", buscarCelular);
personas.get("/personas/buscarCorreo/:email", buscarCorreo);

export default personas;
