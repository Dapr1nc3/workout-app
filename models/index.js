// packages all the models in one file
const Measurements = require("./Measurements");
const User = require("./User");

User.hasOne(Measurements, {
  foreignKey: "user_id",
});
Measurements.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Measurements };
