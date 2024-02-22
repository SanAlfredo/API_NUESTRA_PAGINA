import express from "express";
import indexRoutes from "./routes/index.routes.js";
import personRoutes from "./routes/person.routes.js";
import rolRoutes from "./routes/role.routes.js";
import userRoleRoutes from "./routes/user.role.routes.js";
import usuarioRoutes from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.use(indexRoutes);
app.use(personRoutes);
app.use(rolRoutes);
app.use(userRoleRoutes);
app.use(usuarioRoutes);

export default app;
