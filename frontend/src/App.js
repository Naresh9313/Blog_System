import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogList from './pages/BlogList/BlogList';
import CreateBlog from './pages/createBlog/CreateBlog';
import Login from './pages/login/login';
import Register from './pages/register/register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
