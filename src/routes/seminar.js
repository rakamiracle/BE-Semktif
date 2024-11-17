const express = require('express');
const { authenticate, isCoordinator } = require('../middlewares/auth');
const { getAllSeminars, createSeminar } = require('../controllers/seminarController');
const router = express.Router();

router.get('/', authenticate, getAllSeminars); 
router.post('/', authenticate, isCoordinator, createSeminar); 

module.exports = router;
