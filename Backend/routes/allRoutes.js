const express = require('express');
const router = express.Router();

const user = require('./User/userRoutes');
router.use(user);


const blog = require('./Blog/blogRoutes');
router.use(blog);


module.exports = router;
