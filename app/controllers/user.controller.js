import Person from "../models/person.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

//metodo para crear un usuario
export const create = (req, res) => {
  console.log("create User", req.body);
  const {
    body: { usuario, contrasenia, persona },
  } = req;
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
  if (!persona) {
    res.status(400).send({
      message: "El campo persona es obligatorio",
    });
    return;
  }
  const userInsert = {
    user: usuario,
    password: bcrypt.hashSync(contrasenia, 8),
    personId: persona,
  };

  Person.findByPk(persona)
    .then((data) =>
      data
        ? User.create(userInsert)
            .then((data) => {
              res.send({ message: "usuario creado", data: data });
            })
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe esa persona" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve la lista de usuarios
export const list = (req, res) => {
  console.log("list method called", req.body);
  User.findAll()
    .then((data) =>
      data
        ? res.send({ message: "lista de usuarios", data: data })
        : res.send({
            message: "no hay datos",
          })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve un solo usuario
export const detail = (req, res) => {
  console.log("detalle de Usuario ", req.params);
  User.findByPk(req.params.id)
    .then((data) =>
      data
        ? res.send({ message: "usuario encontrado", data: data })
        : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//actualizar datos usuario
export const update = (req, res) => {
  console.log("actualizar usuario ", req.params, req.body);
  const {
    body: { usuario, contrasenia, persona },
  } = req;
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
  if (!persona) {
    res.status(400).send({
      message: "El campo persona es obligatorio",
    });
    return;
  }
  const userInsert = {
    user: usuario,
    password: bcrypt.hashSync(contrasenia, 8),
    personId: persona,
  };

  Person.findByPk(persona)
    .then((data) =>
      data
        ? User.findByPk(req.params.id)
            .then((data) =>
              data
                ? User.update(userInsert, { where: { id: req.params.id } })
                    .then(res.send({ message: "actualizado con exito" }))
                    .catch((error) => {
                      res.status(500).send({
                        message: error.message,
                      });
                    })
                : res.send({ message: "no existe ese usuario " })
            )
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe esa persona" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

//borrar un usuario
export const borrar = (req, res) => {
  console.log("borrando usuario", req.params);
  User.findByPk(req.params.id)
    .then((data) =>
      data
        ? User.destroy({ where: { id: req.params.id } })
            .then(res.send({ message: "eliminado con exito" }))
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe ese usuario" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
