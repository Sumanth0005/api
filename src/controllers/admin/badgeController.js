const badgeService = require('../../services/badgeService');
//add the badge data
exports.add = async (req, res) => {
  try {
    const badge = await badgeService.addBadge(req.body);
    res.status(201).json({ success: true, data: badge });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
//update the badge
exports.updateBadge = async (req, res) => {
  try {
    const { id } = req.params; 

    const updateBadge = await badgeService.update(req.body, id);
    if (!updateBadge) {
      return res.status(404).json({ message: 'Badge not found.' });
    }

    res.status(200).json({ message: 'Badge updated successfully.', data: updateBadge });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};
//read the badge
exports.readBadge = async (req, res) => {
  try {
    const { id } = req.params; 

    const readBadge = await badgeService.get(id);
    if (!readBadge) {
      return res.status(404).json({ message: 'Badge not found.' });
    }

    res.status(200).json({ message: 'Badge retrieved successfully.', data: readBadge });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};

//delete the badge
exports.deleteBadge = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteResult = await badgeService.delete(id); 

    if (!deleteResult) {
      return res.status(404).json({ success: false, message: 'badge not found.' });
    }

    res.status(200).json({ success: true, message: 'badge deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

exports.readAllBadges = async (req, res) => {
  console.log('Received request to /get')
  try {
    const allBadge = await badgeService.getAll();
    res.status(200).json({ message: 'All badges retrieved successfully.', data: allBadge });
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
};