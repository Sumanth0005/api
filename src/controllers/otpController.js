const otpService = require('../services/otpService');
const User = require('../models/user');

// Create a new OTP
exports.createOTP = async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {                                                     
        return res.status(400).json({ message: 'Email is required' });
      }

      const user = await User.findOne({ email });      // Checks if the user exists in the database by emailID
      if (!user) {
        return res.status(404).json({ message: 'No user found' });
      }

      const otpEntry = await otpService.createOTP(user._id);    // generates otp and responds
      return res.status(201).json({
        message: 'OTP created successfully',
        otpEntry,
      });
    } catch (error) {
      console.error('Error in createOTP:', error.message);
      return res.status(500).json({ message: error.message });
    }
  };

// Update an OTP 
exports.updateOTP = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedOTP = await otpService.updateOTP(id, updateData);
    return res.status(200).json({
      message: 'OTP updated successfully',
      updatedOTP,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

// Reads one record(Otp)
exports.getUserOTPs = async (req, res) => {
  try {
    const { userId } = req.params;

    const otps = await otpService.getUserOTPs(userId);
    return res.status(200).json({
      message: 'User OTPs retrieved successfully',
      otps,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
// reads all records(OTPs)
exports.getAllOTPs = async (req, res) => {
  try {
    const otps = await otpService.getAllOTPs();

    return res.status(200).json({
      message: 'All OTPs retrieved successfully',
      otps,
    });
  } catch (error) {
    console.error('Error fetching OTPs:', error.message);
    return res.status(500).json({ message: error.message });
  }
};
