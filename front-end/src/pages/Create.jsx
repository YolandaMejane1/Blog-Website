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
      const response = await axios.post('http://localhost:5002/api/posts', newPost);
      navigate('/blogs');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="container py-8">
      <h2 className="text-2xl font-bold">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium" htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2 p-2 w-full border rounded"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Create Post</button>
      </form>
    </div>
  );
};

export default Create;
