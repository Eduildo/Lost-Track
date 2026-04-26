const Category = require("../models/category.model");

const getAllCategories = async () => {
  return await Category.findAll();
};

module.exports = {
  getAllCategories,
};
