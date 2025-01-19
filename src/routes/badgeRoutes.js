const express = require('express');
const badgeController = require('../controllers/admin/badgeController');
const router = express.Router();

router.post('/', badgeController.add);
router.put('/update/:id', badgeController.updateBadge);
router.delete('/badge/:id', badgeController.deleteBadge);
router.get('/badge/:id', badgeController.readBadge);

module.exports = router;