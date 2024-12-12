const express = require('express');
const router = express.Router();
const { checkout } = require('../controllers/checkout1');

// Order checkout endpoint
router.post('/checkout', checkout);

module.exports = router;