const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const blogController = require('../../controller/Blog/blogController');

router.post('/blogs', authMiddleware, blogController.createBlog);
router.get('/getBlogs', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.put('/:id', authMiddleware, blogController.updateBlog);
router.delete('/:id', authMiddleware, blogController.deleteBlog);

module.exports = router;
