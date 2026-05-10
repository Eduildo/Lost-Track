const itemService = require("../services/item.service");

exports.match = async (req, res) => {
  try {
    const matches = await itemService.matchItems(req.params.id);
    res.json(matches);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const item = await itemService.createItem(req.body, req.user.id);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const items = await itemService.getAllItem(req.query);
  res.json(items);
};
exports.getById = async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
exports.update = async (req, res) => {
  try {
    const item = await itemService.updateItem(
      req.params.id,
      req.user.id,
      req.body,
    );
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const result = await itemService.deleteItem(req.params.id, req.user);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.myItems = async (req, res) => {
  const items = await itemService.getMyItems(req.user.id);
  res.json(items);
};

exports.updateStatus = async (req, res) => {
  try {
    const item = await itemService.updateStatus(
      req.params.id,
      req.user.id,
      req.body.status,
    );
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
