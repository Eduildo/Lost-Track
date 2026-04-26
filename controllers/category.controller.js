const categoryService = require("../services/category.service");

exports.crateCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getAll = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json(categories);
};

exports.update = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(
      req.params.id,
      req.body,
    );
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const result = await categoryService.deleteCategory(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};
