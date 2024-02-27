import { conn } from "../models/conexion.model.js";
import "../models/index.model.js";
import { randomUUID } from "crypto";
import bcrypt from "bcryptjs";

export const ping = (req, res) => {
  if (conn) {
    res.send({
      message: "Conectado con exito",
    });
  } else {
    res.status(500).send({ message: "No se ha podido conectar" });
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

//funcion para llenar la base de datos
export const llenar = (req, res) => {
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  if (conn) {
    let ui = randomUUID();
    let date = Date.now();
    let date2 = formatDate(date);
    var sql = `INSERT INTO people (uuid,name,cellphone,email,createdAt,updatedAt) VALUES 
    ("${ui}",'alfredo valverde','67996741','alfredo@hotmail.com',"${date2}","${date2}"),
    ("${ui}",'manuel vargas','7545652','manu@gmail.com',"${date2}","${date2}"),
    ("${ui}",'paulo callejas','35466454','paulo@yahoo.com',"${date2}","${date2}")`;
    conn
      .query(sql, function (error, result) {
        if (error) throw error;
      })
      .then((result) => {
        res.send({
          message: "creado personas con exito",
          data: result,
        });
      });
    sql = `INSERT INTO roles (uuid,rol,createdAt,updatedAt) VALUES 
      ("${ui}",'admin',"${date2}","${date2}"),
      ("${ui}",'gerente',"${date2}","${date2}"),
      ("${ui}",'secretaria',"${date2}","${date2}")`;
    conn
      .query(sql, function (error, result) {
        if (error) throw error;
      })
      .then((result) => {
        res.send({
          message: "creado roles con exito",
          data: result,
        });
      });
    const pass = bcrypt.hashSync("1234", 8);
    sql = `INSERT INTO users (uuid,user,password,personId,createdAt,updatedAt) VALUES 
      ("${ui}",'sanalfredo','${pass}',1,"${date2}","${date2}"),
      ("${ui}",'manuelin','${pass}',2,"${date2}","${date2}"),
      ("${ui}",'paulin','${pass}',3,"${date2}","${date2}")`;
    conn
      .query(sql, function (error, result) {
        if (error) throw error;
      })
      .then((result) => {
        res.send({
          message: "creado usuarios con exito",
          data: result,
        });
      });
      sql = `INSERT INTO user_roles (uuid,userId,roleId,createdAt,updatedAt) VALUES 
      ("${ui}",1,1,"${date2}","${date2}"),
      ("${ui}",2,1,"${date2}","${date2}"),
      ("${ui}",3,1,"${date2}","${date2}")`;
    conn
      .query(sql, function (error, result) {
        if (error) throw error;
      })
      .then((result) => {
        res.send({
          message: "creado user - roles con exito",
          data: result,
        });
      });
  } else {
    res.status(500).send({ message: "No se ha podido conectar" });
  }
};
