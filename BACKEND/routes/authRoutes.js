const express = require('express');
const { register, login, sendOTP, verifyOTP, getUserData } = require('../controllers/authController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.get('/user', auth, getUserData);

module.exports = router;