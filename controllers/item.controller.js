const itemService = require("../services/item.service");

exports.create = async (req, res) => {
  try {
    const item = await itemService.createItem(req.body, req.user.id);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
