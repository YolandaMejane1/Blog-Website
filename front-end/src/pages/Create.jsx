import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('https://blog-website-5-r5pv.onrender.com/api/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/blogs');
    } catch (error) {
      console.error('Error creating post:', error);
      alert(error.response?.data?.message || 'An error occurred while uploading the image');
    }
  };

  return (
    <div
      className="flex w-screen justify-center items-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1459278558918-f94278c0f022?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="w-full max-w-md p-6 bg-white bg-opacity-5 backdrop-blur-sm shadow-lg border border-gray-300">
        <h2 className="text-2xl font-thin text-center mb-4 text-white">Create Blog Post</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-3">
            <label className="block text-sm font-medium text-white" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300  bg-transparent text-white placeholder-gray-200 focus:ring-1 focus:ring-white"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-white" htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300  bg-transparent text-white placeholder-gray-200 focus:ring-1 focus:ring-white"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-white" htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300  bg-transparent text-white placeholder-gray-200 focus:ring-1 focus:ring-white"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white" htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 p-2 w-full border border-gray-300  bg-transparent text-white focus:ring-1 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-white text-black text-md font-light  hover:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
