const Post = require('../models/Post');

// GET all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD a post
exports.addPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE a post
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE a post
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
