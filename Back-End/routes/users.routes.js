const express = require("express");
const router = express.Router();
const Post = require("./models/Post");

//this code is for creating a new blog post and i have integrated a try catch error handler
router.post("/", async (req, res) => {
    const { title, content, author } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }
    try {
      const newPost = await new Post({ title, content, author }).save();
      res.status(201).json({ message: "Post created", post: newPost });
    } catch (err) {
      res.status(500).json({ error: "Error creating post" });
    }
  });
// this code is for getting all the posts
  router.get("/", async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: "Error fetching posts" });
    }
  });

  //this code is for 'get' post using the unique user ID
  router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      post ? res.status(200).json(post) : res.status(404).json({ error: "Post not found" });
    } catch (err) {
      res.status(500).json({ error: "Error fetching post" });
    }
  });

//this code is for updating the title and content of a blog post, the status codes for error are integrated
  router.put("/:id", async (req, res) => {
    try {
      const { title, content } = req.body;
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
      updatedPost ? res.status(200).json({ message: "Post updated", post: updatedPost }) 
                  : res.status(404).json({ error: "Post not found" });
    } catch (err) {
      res.status(500).json({ error: "Error updating post" });
    }
  });

//this is for deleting posts
  router.delete("/:id", async (req, res) => {
    try {
      const deletedPost = await Post.findByIdAndDelete(req.params.id);
      deletedPost ? res.status(200).json({ message: "Post deleted" }) 
                  : res.status(404).json({ error: "Post not found" });
    } catch (err) {
      res.status(500).json({ error: "Error deleting post" });
    }
  });
  
  module.exports = router;