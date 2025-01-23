const OTP = require('../models/otp');

// Create a new OTP entry
exports.createOTP = async (userId) => {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
    const requestTime = new Date();
    const expiryTime = new Date(requestTime.getTime() + 1 * 60 * 1000); // Expires in 1 minute
  
    const otpEntry = new OTP({
      userId,
      otp,
      requestTime,
      expiryTime,
      verifiedStatus: 'pending',
    });
  
    await otpEntry.save();
    return otpEntry;
  };

// Updating Otp entry
exports.updateOTP = async (id, updateData) => {
  const otpEntry = await OTP.findByIdAndUpdate(id, updateData, { new: true });
  if (!otpEntry) throw new Error('OTP not found');
  return otpEntry;
};

// Getting Otp for each user
exports.getUserOTPs = async (userId) => {
  const otps = await OTP.find({ userId }).sort({ requestTime: -1 });
  if (!otps.length) throw new Error('No OTP entries found for this user');
  return otps;
};

// Getting all Otps
exports.getAllOTPs = async () => {
  const otps = await OTP.find().sort({ requestTime: -1 }); // Sorting by most recent requestTime
  if (!otps.length) {
    throw new Error('No OTP entries found');
  }
  return otps;
};