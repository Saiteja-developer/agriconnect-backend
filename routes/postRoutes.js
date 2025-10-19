const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Create a post
router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.send(posts);
});
router.post('/', async (req, res) => {
  try {
    console.log("📥 New post received:", req.body); // Add this line
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    console.error("❌ Post creation error:", err.message);
    res.status(400).send(err.message);
  }
});
router.post('/', async (req, res) => {
  try {
    console.log("📥 New post received:", req.body); // Add this line
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (err) {
    console.error("❌ Post creation error:", err.message);
    res.status(400).send(err.message);
  }
});

module.exports = router;
