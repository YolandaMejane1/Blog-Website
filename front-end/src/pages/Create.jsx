import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
    };

    try {
      const response = await axios.post('https://blog-website-7w3k.onrender.com/api/posts', newPost);
      navigate('/blogs');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl border border-gray-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700" htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-600"
              rows="6"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-black hover:bg-gray-800 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
