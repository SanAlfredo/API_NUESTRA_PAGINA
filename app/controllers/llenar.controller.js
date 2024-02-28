import Role from "../models/role.model.js";
import Person from "../models/person.model.js";
import User from "../models/user.model.js";
import UserRole from "../models/user.role.model.js";
import bcrypt from "bcryptjs";

//funcion para llenar la base de datos
export const llenar = (req, res) => {
  Role.bulkCreate([{ rol: "admin" }, { rol: "gerente" }, { rol: "secretario" }])
    .then((data) =>
      data
        ? Person.bulkCreate([
            {
              name: "alfredo valverde",
              cellphone: "67996741",
              email: "alfredo.2009.8@gmail.com",
            },
            {
              name: "manuel vargas",
              cellphone: "73226252",
              email: "manu@hotmail.com",
            },
            {
              name: "paulo callejas",
              cellphone: "78900201",
              email: "paul@yahoo.com",
            },
          ])
            .then((data) =>
              data
                ? User.bulkCreate([
                    {
                      user: "sanalfredo5",
                      password: bcrypt.hashSync("1234", 8),
                      personId: 1,
                    },
                    {
                      user: "manuelin5",
                      password: bcrypt.hashSync("1234", 8),
                      personId: 2,
                    },
                    {
                      user: "paulin5",
                      password: bcrypt.hashSync("1234", 8),
                      personId: 3,
                    },
                  ])
                    .then((data) =>
                      data
                        ? UserRole.bulkCreate([
                            { userId: 1, roleId: 2 },
                            { userId: 2, roleId: 2 },
                            { userId: 3, roleId: 2 },
                          ])
                            .then((data) =>
                              data
                                ? res.send({ message: "registro exitoso" })
                                : res.send({
                                    message:
                                      "error al relacionar user con roles",
                                  })
                            )
                            .catch((error) => {
                              res.status(500).send({ message: error.message });
                            })
                        : res.send({ message: "error al registrar usuarios" })
                    )
                    .catch((error) => {
                      res.status(500).send({ message: error.message });
                    })
                : res.send({ message: "error al guardar personas" })
            )
            .catch((error) => {
              res.status(500).send({ message: error.message });
            })
        : res.send({ message: "error al guardar roles" })
    )
    .catch((error) => {
      res.status(500).send({
        message: error.message,
      });
    });
};
