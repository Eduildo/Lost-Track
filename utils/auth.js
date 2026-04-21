require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createAccessToken = (user) => {
  //console.log("Secret Check:", process.env.JWT_SECRET);
  return jwt.sign(
    {
      sub: user.id,
      role: user.role,
      type: "access",
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
};
const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const verifyPassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
module.exports = {
  createAccessToken,
  hashPassword,
  verifyPassword,
};
