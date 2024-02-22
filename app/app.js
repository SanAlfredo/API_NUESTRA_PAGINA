import express from "express";
import indexRoutes from "./routes/index.routes.js";
import personRoutes from "./routes/person.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.use(indexRoutes);
app.use(personRoutes);

export default app;
