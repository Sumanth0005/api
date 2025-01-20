const express = require("express");
const techstackController = require("../controllers/techstackController");

const router = express.Router();

router.post("/", techstackController.techstack);
router.put('/update/:id', techstackController.updateTechStack);
router.delete('/techstack/:id', techstackController.deleteTechStack);
router.get('/get/:id',techstackController.readTechstack)
router.get('/get', techstackController.readAllTechstack);

module.exports = router