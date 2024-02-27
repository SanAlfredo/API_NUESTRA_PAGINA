import { where } from "sequelize";
import Person from "../models/person.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const create = (req, res) => {
  console.log("Create full User", req.body);
  const {
    body: { nombre, celular, email, usuario, contrasenia },
  } = req;
  if (!nombre) {
    res.status(400).send({
      message: "El campo nombre es obligatorio",
    });
    return;
  }
  if (!celular) {
    res.status(400).send({
      message: "El campo celular es obligatorio",
    });
    return;
  }
  if (!email) {
    res.status(400).send({
      message: "el campo email es obligatorio",
    });
    return;
  }
  //definir persona a insertar
  const person = {
    name: nombre,
    cellphone: celular,
    email: email,
  };
  if (!usuario) {
    res.status(400).send({
      message: "El campo usuario es obligatorio",
    });
    return;
  }
  if (!contrasenia) {
    res.status(400).send({
      message: "El campo contrasenia es obligatorio",
    });
    return;
  }

  Person.create(person)
    .then((data) => {
      data
        ? Person.findAll({
            where: {
              uuid: data.uuid,
            },
            attributes: ["id"],
          })
            .then((data) => {
              // res.send({message:"registro exitoso",data:id})
              if (data) {
                const id = data[0].id;
                const userInsert = {
                  user: usuario,
                  password: bcrypt.hashSync(contrasenia, 8),
                  personId: id,
                };
                User.create(userInsert)
                  .then((data) => {
                    res.send({ message: "usuario creado", data: data });
                  })
                  .catch((error) => {
                    res.status(500).send({
                      message: error.message,
                    });
                  });
              } else {
                res.send({ message: "no se pudo registrar" });
              }
            })
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe esa persona" });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
