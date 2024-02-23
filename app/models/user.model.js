import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const User = conn.define("users", {
  id: {
    type: DataTypes.INTEGER,
    unsigned: true,
    primaryKey: true,
    autoIncrement: true,
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  user: {
    type: DataTypes.STRING(50),
    allowNull:false,
    unique:true
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false
  },
  personId:{
    type: DataTypes.INTEGER,
    allowNull:false
  }
});

export default User;
