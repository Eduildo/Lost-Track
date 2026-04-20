const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
  }

  if (!token) return res.status(401).json({ error: "Não autenticado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByPk(decoded.sub);

    if (!user) return res.status(401).json({ error: "User inválido" });

    req.user = user;
    next();
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
};
