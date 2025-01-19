const express = require('express');
const badgeController = require('../controllers/admin/badgeController');
const router = express.Router();

router.post('/', badgeController.add);

module.exports = router;