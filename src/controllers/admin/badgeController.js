const badgeService = require('../../services/badgeService');

exports.add = async (req, res) => {
  try {
    const badge = await badgeService.addBadge(req.body);
    res.status(201).json({ success: true, data: badge });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};