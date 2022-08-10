const express = require('express');
const router = express.Router();

// Login 
router.get('/login', (req, res) => res.send('Login Route'))

// Register 
router.get('/register', (req, res) => res.send('Register Route'))

module.exports = router;