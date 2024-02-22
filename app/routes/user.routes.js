import express, { Router } from "express";
import {
  create,
  list,
  detail,
  update,
  borrar,
} from "../controllers/user.controller.js";

const app = express();

const usuarios = Router();

// app.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

usuarios.post("/usuarios", create);
usuarios.get("/usuarios", list);
usuarios.get("/usuarios/:id", detail);
usuarios.put("/usuarios/:id", update);
usuarios.delete("/usuarios/:id", borrar);

export default usuarios;