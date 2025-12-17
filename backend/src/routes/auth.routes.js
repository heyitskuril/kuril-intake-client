// Auth Routes
// Handle authentication endpoints

const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth.middleware');
const { login, getMe, register } = require('../controllers/auth.controller');

// PUBLIC ROUTES
router.post('/login', login);
router.post('/register', register); // OPTIONAL - disable di production

// PROTECTED ROUTES
router.get('/me', protect, getMe);

module.exports = router;