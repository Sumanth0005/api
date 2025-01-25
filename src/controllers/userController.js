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

exports.updateUser = async (req, res) => {
  try{
    const id = req.params.id;

    // if(req.user.id !== id) {
    //   return res.status(403).json({message: "User is not authenticated"});
    // }

    const udpateUserRecord = await userService.update(req.body, id);
    if (!udpateUserRecord) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json({ message: 'User updated successfully.', data: udpateUserRecord });

  } catch(e){
    res.status(401).json({success: false, message: e.message});
  }
};
//read
exports.readUser = async (req, res) => {
  try {
    const user = await userService.get(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }
    res.status(200).json({ message: 'User retrieved successfully.', data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
