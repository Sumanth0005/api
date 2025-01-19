const badge = require('../models/admin/badge');
const Badge = require('../models/admin/badge');

exports.addBadge = async (badgeData) => {
  const badge = new Badge(badgeData);
  return await badge.save();
};
exports.update = async (badgeData, badgeId) => {
  return await badge.findByIdAndUpdate(
    badgeId,
    { $set: badgeData}, 
    { new: true, runValidators: true } 
  );  
}

exports.get = async (id) => {
  return await badge.findById(id);
};

exports.delete = async (id) => {
  return await badge.findByIdAndDelete(id);
};