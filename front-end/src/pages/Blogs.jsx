import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/posts');
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
      await axios.delete(`http://localhost:5002/api/posts/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="container py-8">
      <h2 className="text-2xl font-bold">All Blog Posts</h2>
      <div className="space-y-6 mt-6">
        {currentPosts.map((post) => (
          <div key={post._id} className="border-b pb-4">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-gray-600">{post.content.slice(0, 150)}...</p>
            <div className="flex gap-4">
              <Link to={`/post/${post._id}`} className="text-blue-500">Read More</Link>
              <button onClick={() => deletePost(post._id)} className="text-red-500">Delete</button>
              <Link to={`/edit/${post._id}`} className="text-yellow-500">Edit</Link>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        
        <div className="flex flex-1 justify-between sm:hidden">
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>

        
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{indexOfFirstPost + 1}</span> to{' '}
              <span className="font-medium">{Math.min(indexOfLastPost, posts.length)}</span> of{' '}
              <span className="font-medium">{posts.length}</span> results
            </p>
          </div>
          <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
              <button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    currentPage === index + 1
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
