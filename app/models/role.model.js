import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";


const Role = conn.define("roles", {
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
  rol: {
    type: DataTypes.STRING(15),
    allowNull:false
  },
},
{
  hooks: {
    afterCreate: (record) => {
      delete record.dataValues.id;
      delete record.dataValues.createdAt;
      delete record.dataValues.updatedAt;
    },
    afterUpdate: (record) => {
      delete record.dataValues.id;
      delete record.dataValues.createdAt;
      delete record.dataValues.updatedAt;
    },
  },
});

export default Role;