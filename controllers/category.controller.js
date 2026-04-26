const categoryService = require("../services/category.service");

exports.getAll = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json(categories);
};
