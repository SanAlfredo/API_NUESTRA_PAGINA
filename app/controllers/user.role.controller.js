import Role from "../models/role.model.js";
import User from "../models/user.model.js";
import UserRole from "../models/user.role.model.js";

//metodo para crear un enlace rol user
export const create = (req, res) => {
  console.log("create User Role", req.body);
  const {
    body: { usuario, rol },
  } = req;
  if (!usuario) {
    res.status(400).send({
      message: "El campo usuario es obligatorio",
    });
    return;
  }
  if (!rol) {
    res.status(400).send({
      message: "El campo rol es obligatorio",
    });
    return;
  }
  const roles = {
    user_id: usuario,
    role_id: rol,
  };
  User.findByPk(usuario)
    .then((data) =>
      data
        ? Role.findByPk(rol).then((data) =>
            data
              ? UserRole.create(roles)
                  .then((data) => {
                    res.send(data);
                  })
                  .catch((error) => {
                    res.status(500).send({
                      message: error.message,
                    });
                  })
              : res.send({ message: "no existe el rol" })
          )
        : res.send({ message: "no existe el usuario" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve la lista de roles users
export const list = (req, res) => {
  console.log("list method called", req.body);
  UserRole.findAll()
    .then((data) =>
      data
        ? res.send(data)
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
//devuelve un solo rol user
export const detail = (req, res) => {
  console.log("detalle de Usuarios y Roles ", req.params);
  UserRole.findByPk(req.params.id)
    .then((data) =>
      data ? res.send(data) : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//actualizar datos rol user
export const update = (req, res) => {
  console.log("actualizar Usuario y roles ", req.params, req.body);
  const {
    body: { usuario, rol },
  } = req;
  if (!usuario) {
    res.status(400).send({
      message: "El campo usuario es obligatorio",
    });
    return;
  }
  if (!rol) {
    res.status(400).send({
      message: "El campo rol es obligatorio",
    });
    return;
  }
  const roles = {
    user_id: usuario,
    role_id: rol,
  };
  User.findByPk(usuario)
    .then((data) =>
      data
        ? Role.findByPk(rol).then((data) =>
            data
              ? UserRole.findByPk(req.params.id)
              .then((data) =>
                data
                  ? UserRole.update(roles, { where: { id: req.params.id } })
                      .then(res.send("actualizado con exito"))
                      .catch((error) => {
                        res.status(500).send({
                          message: error.message,
                        });
                      })
                  : res.send({ message: "no existe ese Rol con user" })
              )
              .catch((error) => {
                res.status(500).send({
                  message: error.message,
                });
              })
              : res.send({ message: "no existe el rol" })
          )
        : res.send({ message: "no existe el usuario" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });

  
};

//borrar un rol user
export const borrar = (req, res) => {
  console.log("borrando User con rol", req.params);
  UserRole.findByPk(req.params.id)
    .then((data) =>
      data
        ? UserRole.destroy({ where: { id: req.params.id } })
            .then(res.send("eliminado con exito"))
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe ese rol con User" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};