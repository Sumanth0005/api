const Badge = require('../models/admin/badge');

exports.addBadge = async (badgeData) => {
  const badge = new Badge(badgeData);
  return await badge.save();
};