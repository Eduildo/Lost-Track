const servce = require("../services/notification.service");

exports.getAll = async (req, res) => {
  const notifications = await Service.getNotification(req.user.id);
  res.json(notifications);
};

exports.read = async (req, res) => {
  try {
    const notification = await Service.markAsRead(req.params.id, req.user.id);
    res.json(notification);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const result = await Service.deleteNotification(req.params.id, req.user.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
