const Notificaton = require("../models/notification.model");

const createNotification = async (userId, message) => {
  return await Notificaton.create({
    user_id: userId,
    message,
  });
};
module.exports = createNotification;
