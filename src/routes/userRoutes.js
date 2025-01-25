const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.put('/update/:id', userController.updateUser);
router.get('/:id', userController.readUser);

module.exports = router;
