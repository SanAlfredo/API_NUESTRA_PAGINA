import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";


const Role = conn.define("roles", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  role: {
    type: DataTypes.STRING(15),
  },
});

export default Role;