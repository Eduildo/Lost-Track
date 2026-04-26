const Item = require("../models/item.model");

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

module.exports = {
  createItem,
};
