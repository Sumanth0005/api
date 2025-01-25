const problemService = require('../services/problemService');

// Add a new problem
exports.addProblem = async (req, res) => {
  try {
    const problem = await problemService.addProblem(req.body);
    res.status(201).json({ success: true, data: problem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.add = async (req, res) => {
  try {
    const badge = await badgeService.addBadge(req.body);
    res.status(201).json({ success: true, data: badge });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a problem
exports.updateProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProblem = await problemService.update(req.body, id);
    if (!updatedProblem) {
      return res.status(404).json({ message: 'Problem not found.' });
    }
    res.status(200).json({ message: 'Problem updated successfully.', data: updatedProblem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get a specific problem by ID
exports.readProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await problemService.get(id);
    if (!problem) {
      return res.status(404).json({ message: 'Problem not found.' });
    }
    res.status(200).json({ message: 'Problem retrieved successfully.', data: problem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a problem
exports.deleteProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteResult = await problemService.delete(id);
    if (!deleteResult) {
      return res.status(404).json({ success: false, message: 'Problem not found.' });
    }
    res.status(200).json({ success: true, message: 'Problem deleted successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all problems
exports.readAllProblems = async (req, res) => {
  try {
    const allProblems = await problemService.getAll();
    res.status(200).json({ message: 'All problems retrieved successfully.', data: allProblems });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};