import { conn } from "../models/conexion.model.js";
import "../models/index.model.js";

export const ping = (req, res) => {
  if (conn) {
    res.send({
      message:"Conectado con exito"
    });
  } else {
    res.status(500).send({message: "No se ha podido conectar"});
  }
};
export const index = (req, res) => {
  res.json({
    message: "Bienvenido a la pagina",
    data: {
      nameSystem: "backend api nuestra pagina",
      version: "0.0.1",
      developer: "Alfredo Valverde Aranibar",
      email: "alfredo.2009.8@gmail.com",
    },
  });
};
