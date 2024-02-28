import Person from "../models/person.model.js";
import { Op } from "sequelize";

//resultados esperados
const resultados = ["uuid", "name", "cellphone", "email"];

//metodo para crear una persona
export const create = (req, res) => {
  console.log("create Person", req.body);

  const {
    body: { nombre, celular, email },
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
  const person = {
    name: nombre,
    cellphone: celular,
    email: email,
  };
  Person.create(person)
    .then((data) => {
      res.send({ message: "datos guardados", data: data });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//devuelve la lista de personas
export const list = (req, res) => {
  console.log("list method called", req.body);
  Person.findAndCountAll({
    attributes: resultados,
  })
    .then((data) =>
      data
        ? res.send({
            message: `personas encontradas`,
            data: { cantidad: data.count, elementos: data.rows },
          })
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
//devuelve una sola persona
export const detail = (req, res) => {
  console.log("detalle de Persona ", req.params);
  Person.findAndCountAll({
    where: { uuid: req.params.id },
    attributes: resultados,
  })
    .then((data) =>
      data
        ? res.send({
            message: "persona encontrada",
            data: { cantidad: data.count, elementos: data.rows },
          })
        : res.send({ message: "no hay datos" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
//actualizar datos persona
export const update = (req, res) => {
  console.log("actualizar persona ", req.params, req.body);
  const {
    body: { nombre, celular, email },
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
  const person = {
    name: nombre,
    cellphone: celular,
    email: email,
  };

  Person.findAll({ where: { uuid: req.params.id } })
    .then((data) =>
      data
        ? Person.update(person, { where: { uuid: req.params.id } })
            .then(res.send({ message: "actualizado con exito" }))
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

//borrar una persona
export const borrar = (req, res) => {
  console.log("borrando persona", req.params);
  Person.findAll({ where: { uuid: req.params.id } })
    .then((data) =>
      data
        ? Person.destroy({ where: { uuid: req.params.id } })
            .then(res.send({ message: "eliminado con exito" }))
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

//buscar por nombre
export const buscarNombre = (req, res) => {
  console.log("busqueda por nombre", req.params);
  Person.findAndCountAll({
    where: { name: { [Op.like]: `%${req.params.nombre}%` } },
    attributes: resultados,
  })
    .then((data) =>
      data
        ? res.send({
            message: "personas encontradas",
            data: { cantidad: data.count, elementos: data.rows },
          })
        : res.send({ message: "no hay resultados" })
    )
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

//buscar por celular
export const buscarCelular = (req, res) => {
  console.log("busqueda por celular", req.params);
  Person.findAndCountAll({
    where: { cellphone: { [Op.like]: `%${req.params.celular}%` } },
    attributes: resultados,
  })
    .then((data) =>
      data
        ? res.send({
            message: "personas encontradas",
            data: { cantidad: data.count, elementos: data.rows },
          })
        : res.send({ message: "no hay resultados" })
    )
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

//buscar por correo
export const buscarCorreo = (req, res) => {
  console.log("busqueda por correo", req.params);
  Person.findAndCountAll({
    where: { email: { [Op.like]: `%${req.params.email}%` } },
    attributes: resultados,
  })
    .then((data) =>
      data
        ? res.send({
            message: "personas encontradas",
            data: { cantidad: data.count, elementos: data.rows },
          })
        : res.send({ message: "no hay resultados" })
    )
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};
