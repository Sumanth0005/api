const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phno: {type: String, required: true, unique: true},
  password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function (user) {
  return jwt.sign({ id: this._id, userInfo: user }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
};

module.exports = mongoose.model('User', userSchema);
