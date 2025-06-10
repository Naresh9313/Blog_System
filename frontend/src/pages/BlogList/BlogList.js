
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './BlogList.css';

// function BlogList() {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       const res = await axios.get('http://localhost:5000/getBlogs');
//       setBlogs(res.data);
//     };
//     fetchBlogs();
//   }, []);

//   return (
//     <div className="blog-list-container">
//       <h2>All Blogs</h2>
//       {blogs.map((blog) => (
//         <div className="blog-card" key={blog._id}>
//           <h3>{blog.title}</h3>
//           <p>{blog.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default BlogList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogList.css';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('http://localhost:5000/getBlogs');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Blog System</h1>
        <nav>
          <Link to="/create" className="nav-link">CreateBlog</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>

        </nav>
      </header>

      <main>
        <h2 className="section-title">All Blogs</h2>
        <div className="blog-list">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default BlogList;
