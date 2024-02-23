import Role from "../models/role.model.js";

//metodo para crear un role
export const create = (req, res) => {
  console.log("create Role", req.body);
  const {
    body: { rol },
  } = req;
  if (!rol) {
    res.status(400).send({
      message: "El campo rol es obligatorio",
    });
    return;
  }
  const roles = {
    rol: rol,
  };
  Role.create(roles)
    .then((data) => {
      res.send({ message: "rol creado con exito", data: data });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve la lista de roles
export const list = (req, res) => {
  console.log("list method called", req.body);
  Role.findAll()
    .then((data) =>
      data
        ? res.send({ message: "listado de roles encontrados", data: data })
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
//devuelve un solo rol
export const detail = (req, res) => {
  console.log("detalle de Role ", req.params);
  Role.findByPk(req.params.id)
    .then((data) =>
      data
        ? res.send({ message: "rol encontrado", data: data })
        : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//actualizar datos rol
export const update = (req, res) => {
  console.log("actualizar Role ", req.params, req.body);
  const {
    body: { rol },
  } = req;
  if (!rol) {
    res.status(400).send({
      message: "El campo rol es obligatorio",
    });
    return;
  }
  const roles = {
    role: rol,
  };

  Role.findByPk(req.params.id)
    .then((data) =>
      data
        ? Role.update(roles, { where: { id: req.params.id } })
            .then(res.send({ message: "actualizado con exito" }))
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe ese role" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};

//borrar un rol
export const borrar = (req, res) => {
  console.log("borrando role", req.params);
  Role.findByPk(req.params.id)
    .then((data) =>
      data
        ? Role.destroy({ where: { id: req.params.id } })
            .then(res.send({ message: "eliminado con exito" }))
            .catch((error) => {
              res.status(500).send({
                message: error.message,
              });
            })
        : res.send({ message: "no existe ese role" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
