import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/role.controller.js";

const roles = Router();

roles.post("/roles", create);
roles.get("/roles", list);
roles.get("/roles/:id", detail);
roles.put("/roles/:id", update);
roles.delete("/roles/:id", borrar);

export default roles;