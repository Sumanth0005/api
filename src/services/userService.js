const User = require('../models/user');

exports.register = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }
  return user.generateAuthToken();
};
