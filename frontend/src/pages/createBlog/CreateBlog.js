import React, { useState } from 'react';
import axios from 'axios';
import './CreateBlog.css';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const [form, setForm] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/blogs', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Blog created');
      navigate('/');

    } catch (err) {
      alert('Failed to create blog');
    }
  };

  return (
    <form className="blog-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Content"
        rows="6"
        value={form.content}
        onChange={(e) => setForm({ ...form, content: e.target.value })}
        required
      />
      <button type="submit">Post Blog</button>
    </form>
  );
}

export default CreateBlog;
