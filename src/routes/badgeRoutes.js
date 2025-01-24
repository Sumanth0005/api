const express = require('express');
const badgeController = require('../controllers/admin/badgeController');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

router.post('/', authenticateToken, badgeController.add);
router.put('/update/:id', authenticateToken, badgeController.updateBadge);
router.delete('/badge/:id', authenticateToken, badgeController.deleteBadge);
router.get('/badge/:id', authenticateToken, badgeController.readBadge);
router.get('/get', authenticateToken, badgeController.readAllBadges);

module.exports = router;