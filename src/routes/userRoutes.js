const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/update/:id',authenticateToken, userController.updateUser);
router.get('/:id',  authenticateToken, userController.readUser);

module.exports = router;
