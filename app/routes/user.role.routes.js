import { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/user.role.controller.js";

const userroles = Router();

userroles.post("/userroles", create);
userroles.get("/userroles", list);
userroles.get("/userroles/:id", detail);
userroles.put("/userroles/:id", update);
userroles.delete("/userroles/:id", borrar);

export default userroles;