const userService = require('../services/userService');

exports.registerUser = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(401).json({ success: false, message: error.message });
  }
};
