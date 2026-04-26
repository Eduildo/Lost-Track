const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Item = sequelize.define(
  "Item",
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("lost", "found"),
      allowNull: false,
    },
    date_occurred: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.FLOAT,
    },
    longitude: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.ENUM("ativo", "resolvido"),
      defaultValue: "ativo",
    },
    user_id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
    },
  },
  {
    tableName: "items",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  },
);

module.exports = Item;
