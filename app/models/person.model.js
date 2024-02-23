import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const Person = conn.define("people", {
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
  name: {
    type: DataTypes.STRING(150),
    allowNull:false
  },
  cellphone: {
    type: DataTypes.STRING(200),
  },
  email: {
    type: DataTypes.STRING(150),
    validate:{
        isEmail:true
    }
  },
  
});

export default Person;