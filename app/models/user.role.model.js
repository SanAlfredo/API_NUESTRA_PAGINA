import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";


const UserRole = conn.define("user_role", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default UserRole;