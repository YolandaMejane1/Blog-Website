import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostView = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/posts/${postId}`);
        console.log('Fetched post data:', response.data); 
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]);

  useEffect(() => {
    if (post) {
      console.log('Post image URL:', post.image_url); 
    }
  }, [post]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container m-auto px-8 py-20">
      <div className="max-w-3xl mx-auto p-10 bg-white rounded-lg shadow-lg border border-gray-300">
        {post.image_url && (
          <img
            src={`http://localhost:5001${post.image_url}`}
            alt={post.title}
            className="w-full h-72 object-cover rounded-t-lg"
          />
        )}
        <h2 className="text-3xl font-bold text-center mt-6">{post.title}</h2>
        <p className="text-gray-600 mt-4">{post.content}</p>
      </div>
    </div>
  );
};

export default PostView;
