const express = require('express');
const problemController = require('../controllers/problemControllers');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

// Add a new problem
router.post('/', authenticateToken, problemController.addProblem);

// Update an existing problem by ID
router.put('/:id', authenticateToken, problemController.updateProblem); 

// Delete a problem by ID
router.delete('/:id', authenticateToken, problemController.deleteProblem);

// Get a specific problem by ID
router.get('/:id', authenticateToken, problemController.readProblem);

// Get all problems
router.get('/', authenticateToken, problemController.readAllProblems);

module.exports = router;