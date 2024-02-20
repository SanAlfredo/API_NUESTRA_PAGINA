import Person from "./person.model.js";
import Role from "./role.model.js";
import User from "./user.model.js";
import UserRole from "./user.role.model.js";

//usuario tiene llave foranea de persona
Person.hasOne(User, {
  onUpdate: "CASCADE",
});
User.belongsTo(Person);
//usuario tiene muchos roles a traves de la tabla user_role
User.belongsToMany(Role, {
  through: "user_role",
  foreignKey: {
    name: "user_id",
  },
});
Role.belongsToMany(User, {
  through: "user_role",
  foreignKey: {
    name: "role_id",
  },
});

export { Person, User, Role };
