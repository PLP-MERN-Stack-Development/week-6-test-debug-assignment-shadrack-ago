const express = require('express');
const { createPost } = require('../controllers/postsController');

const router = express.Router();

// Dummy authentication middleware for demonstration
router.use((req, res, next) => {
  req.user = { _id: '1234567890abcdef12345678' }; // Replace with real auth in production
  next();
});

router.post('/', createPost);

module.exports = router; 