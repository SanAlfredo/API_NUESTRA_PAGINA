import { conn } from "./conexion.model.js";
import { DataTypes } from "sequelize";

const UserRole = conn.define("user_roles", {
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
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

export default UserRole;
