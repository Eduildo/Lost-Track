const User = require("./user.model");
const Item = require("./item.model");
const Category = require("./category.model");
const Notification = require("./notification.model");

User.hasMany(Item, { foreignKey: "user_id" });
Item.belongsTo(User, { foreignKey: "user_id" });

Category.hasMany(Item, { foreignKey: "category_id" });
Item.belongsTo(Category, { foreignKey: "category_id" });

User.hasMany(Notification, { foreignKey: "user_id" });
Notification.belongsTo(User, { foreignKey: "user_id" });

module.exports = {
  User,
  Item,
  Category,
  Notification,
};
