const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup Route
router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send("User registered");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Login Route
router.post('/login', async (req, res) => {
  console.log("DEBUG: req.body = ", req.body); // <-- THIS WILL TELL YOU IF BODY EXISTS
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(401).send("Invalid credentials");
  res.send("Login successful");
});



module.exports = router;
