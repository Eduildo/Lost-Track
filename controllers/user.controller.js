const userService = require("../services/user.service");
const { createAccessToken } = require("../utils/auth");

exports.register = async (req, res) => {
  try {
    /*const { password, email } = req.body;
    if (!password) {
      return res
        .status(400)
        .json({ error: "A password não foi enviada no corpo da requisição." });
    }*/
    const user = await userService.registerUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body.email, req.body.password);

    const token = createAccessToken(user);

    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.profile = async (req, res) => {
  res.json(req.user);
};

exports.userProfile = async (req, res) => {
  try {
    const user = await userService.getProfile(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Também Preciso implementar a atualização de password depois
exports.updateProfile = async (req, res) => {
  try {
    const user = await userService.updateProfile(req.user.id, req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePicture = async (req, res) => {
  try {
    const user = await userService.updatePicture(req.user.id, req.body.picture);
    res.json(user);
  } catch {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

exports.block = async (req, res) => {
  try {
    const user = await userService.blockUser(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
