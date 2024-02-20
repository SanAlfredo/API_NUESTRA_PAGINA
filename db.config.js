import { config } from "dotenv";
config();

export default {
  HOST: process.env.MYSQL_HOST || "",
  USER: process.env.MYSQL_USER || "",
  PASSWORD: process.env.MYSQL_PASSWORD || "",
  DB: process.env.MYSQL_DB || "",
  dialect: process.env.MYSQL_dialect || "",
  pool: process.env.MYSQL_pool || "",
};