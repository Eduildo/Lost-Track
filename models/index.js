const User = require("./user.model");
const Item = require("./item.model");

User.hasMany(Item, { foreignKey: "user_id" });
Item.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  User,
  Item,
};
