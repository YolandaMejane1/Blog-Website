import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://blog-website-7w3k.onrender.com/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://blog-website-7w3k.onrender.com/api/posts/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">All Blog Posts</h2>
      <div className="space-y-8">
        {currentPosts.map((post) => (
          <div key={post._id} className="border border-gray-200 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.content.slice(0, 150)}...</p>
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-gray-500">
                By {post.author || 'Anonymous'}
              </div>
              <div className="flex gap-4">
  <Link to={`/post/${post._id}`} className="text-blue-500 hover:underline">
    <FontAwesomeIcon icon={faExternalLinkAlt} /> 
  </Link>
  <button onClick={() => deletePost(post._id)} className="text-red-500 hover:underline">
    <FontAwesomeIcon icon={faTrashAlt} /> 
  </button>
  <Link to={`/edit/${post._id}`} className="text-yellow-500 hover:underline">
    <FontAwesomeIcon icon={faEdit} /> 
  </Link>
</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-2">
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className="text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
            className="text-gray-700 hover:bg-gray-200 p-2 rounded-md"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">{indexOfFirstPost + 1}</span> to{' '}
          <span className="font-medium">{Math.min(indexOfLastPost, posts.length)}</span> of{' '}
          <span className="font-medium">{posts.length}</span> results
        </div>
        <div>
          <nav aria-label="Pagination" className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 text-sm font-semibold rounded-md ${
                  currentPage === index + 1
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
