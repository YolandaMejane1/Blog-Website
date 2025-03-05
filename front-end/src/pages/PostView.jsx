import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostView = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5002/api/posts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container py-8">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-gray-600 mt-4">{post.content}</p>
    </div>
  );
};

export default PostView;
