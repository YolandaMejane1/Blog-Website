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
      await axios.post('http://localhost:5001/api/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      navigate('/blogs');
    } catch (error) {
      console.error('Error creating post:', error);
      alert(error.response?.data?.message || 'An error occurred while uploading the image');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl border border-gray-300">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create Blog Post</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700" htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="mb-4">
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
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700" htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image_url"
              accept="image_url/*"
              onChange={handleImageChange}
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg shadow-sm"
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
