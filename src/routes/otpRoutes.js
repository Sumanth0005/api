const express = require('express');
const otpController = require('../controllers/otpController');

const router = express.Router();

router.post('/create', otpController.createOTP);            // Creation
router.put('/update/:id', otpController.updateOTP);         // Updation
router.get('/user/:userId', otpController.getUserOTPs);     // getting one recod
router.get('/all', otpController.getAllOTPs);               // Reads all records

module.exports = router;
