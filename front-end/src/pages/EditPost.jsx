import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5002/api/posts/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      title,
      content,
    };

    try {
      await axios.put(`http://localhost:5002/api/posts/${id}`, updatedPost);
      navigate(`/post/${id}`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="container mx-auto py-24">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Post</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="bg-black text-white py-2 px-4 rounded w-full">Update Post</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
