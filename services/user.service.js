const User = require("../models/user.model");
const { hashPassword, verifyPassword } = require("../utils/auth");

const registerUser = async ({ name, email, password, phone }) => {
  const existing = await User.findOne({ where: { email } });

  if (existing) throw new Error("Email já registado");

  const password_hash = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    password_hash,
    phone,
  });

  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) throw new Error("Utilizador ou Password inválida");

  if (user.is_blocked) throw new Error("Por favor contacta o administrador");

  const valid = await verifyPassword(password, user.password_hash);

  if (!valid || !user) throw new Error("Utilizador ou Password inválida");

  return user;
};

const getAllUsers = async () => {
  return await User.findAll({
    attributes: { exclude: ["password_hash"] },
  });
};

const getProfile = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: { exclude: ["password_hash"] },
  });
  if (!user) throw new Error("User não encontrado");
  return user;
};

const updateProfile = async (userId, data) => {
  const user = await User.findByPk(userId);

  if (!user) throw new Error("User não encontrado");
  user.name = data.name || user.name;
  user.phone = data.phone || user.phone;
  user.picture = data.picture || user.picture;
  await user.save();
  return user;
};
//
const updatePicture = async (userId, pictureUrl) => {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("User não encontrado");
  user.picture = pictureUrl;
  await user.save();
  return user;
};
//
const blockUser = async (userId) => {
  const user = await User.findByPk(userId);

  if (!user) throw new Error("User não encontrado");

  user.is_blocked = true;
  await user.save();

  return user;
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getProfile,
  updateProfile,
  updatePicture,
  blockUser,
};
