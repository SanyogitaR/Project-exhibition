const express = require('express');
const router = express.Router();
const { checkout } = require('../controllers/orderController');

// Order checkout endpoint
router.post('/checkout', checkout);

module.exports = router;