const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const badgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: {type: String, required: true}
});

module.exports = mongoose.model('Badge', badgeSchema);