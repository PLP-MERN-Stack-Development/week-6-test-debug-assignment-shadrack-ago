const Post = require('../models/Post');

// Example: Create a new post with debugging
exports.createPost = async (req, res) => {
  try {
    // Debug: Log incoming request body
    console.log("Received POST /api/posts with body:", req.body);

    const { title, content, category } = req.body;
    if (!title || !content) {
      // Debug: Log validation error
      console.warn("Validation failed: Missing title or content");
      return res.status(400).json({ error: "Title and content are required" });
    }

    const post = new Post({
      title,
      content,
      category,
      author: req.user._id, // assuming authentication middleware
    });

    await post.save();

    // Debug: Log successful creation
    console.info("Post created:", post);

    res.status(201).json(post);
  } catch (error) {
    // Debug: Log error details
    console.error("Error in createPost:", error);
    res.status(500).json({ error: "Server error" });
  }
}; 