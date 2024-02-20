import { Sequelize } from "sequelize";
import config from "../../db.config.js";

export const conn = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: config.pool,
  operatorsAliases: false,
});

conn
  .sync()
  .then(() => {
    console.log("Sync database success full");
  })
  .catch((error) => console.error("Some Error: ", error));