const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  otp: { type: Number, required: true },
  requestTime: { type: Date, required: true },
  expiryTime: { type: Date, required: true },
  verifiedStatus: {
    type: String,
    enum: ['verified', 'expired', 'pending'],
    default: 'pending',
  },
});

module.exports = mongoose.model('OTP', otpSchema);
