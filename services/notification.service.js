const Notification = require("../models");

const getNotification = async (userId) => {
  return await Notification.findAll({
    where: { user_id: userId },
    order: [["created_at", "DESC"]],
  });
};

const markAsRead = async (id, userId) => {
  const notification = await Notification.findByPk(id);
  if (!notificatio) throw new Error("Notificação não encontrada");
  if (notification.user_id !== userId) throw new Error("Sem permissão");

  notification.lida = true;
  await notification.save();
  return notification;
};

const deleteNotification = async (id, userId) => {
  const notification = await Notification.findByPk(id);
  if (!notification) throw new Error("Notificação não encontrada");
  if (notification.user_id !== userId) throw new Error("Sem permissão");

  await notification.destroy();
  return { message: "Notificação removida" };
};

module.exports = {
  getNotification,
  markAsRead,
  deleteNotification,
};
