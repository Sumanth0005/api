const express = require("express");
const techstackController = require("../controllers/techstackController");
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

router.post("/", authenticateToken, techstackController.techstack);
router.put('/update/:id', authenticateToken, techstackController.updateTechStack);
router.delete('/techstack/:id',authenticateToken, techstackController.deleteTechStack);
router.get('/get/:id', authenticateToken, techstackController.readTechstack)
router.get('/get', authenticateToken, techstackController.readAllTechstack);

module.exports = router