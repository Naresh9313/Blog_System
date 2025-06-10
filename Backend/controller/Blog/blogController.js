const Blog = require('../../models/Blog/Blog');

exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      ...req.body,
      author: req.userId,
    });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error creating blog' });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'name');
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blogs' });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author', 'name');
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching blog' });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { _id: req.params.id, author: req.userId },
      req.body,
      { new: true }
    );
    if (!blog) return res.status(403).json({ message: 'Unauthorized to update this blog' });
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Error updating blog' });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findOneAndDelete({
      _id: req.params.id,
      author: req.userId,
    });
    if (!deleted) return res.status(403).json({ message: 'Unauthorized to delete this blog' });
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting blog' });
  }
};
