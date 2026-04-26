const Category = require("../models/category.model");

const createCategory = async (data) => {
  const existing = await Category.findOne({ where: { nome: data.nome } });
  if (existing) throw new Error("Categoria já existe");

  return await Category.create({ nome: data.nome });
};

const getAllCategories = async () => {
  return await Category.findAll();
};

const updateCategory = async (id, data) => {
  const category = await Category.findByPk(id);

  if (!category) throw new Error("Categoria não encontrada");
  category.nome = data.nome || category.nome;

  await category.save();
  return category;
};

const deleteCategory = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) throw new Error("Categoria não encontrada");

  await category.destroy();

  return { message: "Categoria removida com sucesso" };
};
module.exports = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};
