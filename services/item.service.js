const { Item, User, Category } = require("../models");
const haversine = require("../utils/distance");
//const Category = require("../models/category.model");
const { Op, QueryTypes } = require("sequelize");

const matchItems = async (itemId) => {
  const baseItem = await Item.findByPk(itemId);
  if (!baseItem) throw new Error("Item não encontrado");
  const oppositeType = baseItem.type === "lost" ? "found" : "lost";
  const candidates = await Item.findAll({
    where: {
      category_id: baseItem.category_id,
      type: oppositeType,
      status: "ativo",
    },
  });
  const result = candidates.map((item) => {
    const distance = haversine(
      baseItem.latitude,
      baseItem.longitude,
      item.latitude,
      item.longitude,
    );
    return {
      item,
      distance,
      distance_km: distance,
      match_score: distance ? 1 / (1 + distance) : 0,
    };
  });
  return result.sort((a, b) => b.match_score - a.match_score);
};
const getAllItem = async (query) => {
  const where = {};
  if (query.type) where.type = query.type;
  if (query.category_id) where.category_id = query.category_id;
  if (query.status) where.status = query.status;

  const items = await Item.findAll({
    where,
    include: [
      { model: User, attributes: ["id", "name"] },
      { model: Category, attributes: ["id", "nome"] },
    ],
    order: [["created_at", "DESC"]],
  });
  return items;
};

const createItem = async (data, userId) => {
  const item = await Item.create({
    title: data.title,
    description: data.description,
    category_id: data.category_id,
    type: data.type,
    date_occurred: data.date_occurred,
    location: data.location,
    latitude: data.latitude,
    longitude: data.longitude,
    user_id: userId,
  });
  return item;
};

const getItemById = async (id) => {
  const item = await Item.findByPk(id, {
    include: [
      { model: User, attributes: ["id", "name"] },
      { model: Category, attributes: ["id", "nome"] },
    ],
  });
  if (!item) throw new Error("Item não encontrado");
  return item;
};
const updateItem = async (id, userId, data) => {
  const item = await Item.findByPk(id);

  if (!item) throw new Error("Item não encontrado");

  if (item.user_id !== userId) {
    throw new Error("Sem permissão");
  }

  Object.assign(item, {
    title: data.title || item.title,
    description: data.description || item.description,
    location: data.location || item.location,
  });

  await item.save();

  return item;
};

const deleteItem = async (id, user) => {
  const item = await Item.findByPk(id);

  if (!item) throw new Error("Item não encontrado");

  if (item.user_id !== user.id && user.role !== "admin") {
    throw new Error("Sem permissão");
  }

  await item.destroy();

  return { message: "Item removido" };
};

const getMyItems = async (userId) => {
  return await Item.findAll({
    where: { user_id: userId },
    order: [["created_at", "DESC"]],
  });
};

const updateStatus = async (id, userId, status) => {
  const item = await Item.findByPk(id);

  if (!item) throw new Error("Item não encontrado");

  if (item.user_id !== userId) {
    throw new Error("Sem permissão");
  }

  item.status = status;

  await item.save();

  return item;
};

module.exports = {
  getAllItem,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
  getMyItems,
  updateStatus,
  matchItems,
};
