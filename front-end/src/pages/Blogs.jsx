import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faExternalLinkAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://blog-website-7w3k.onrender.com/api/posts');
        setPosts(response.data);
        setFilteredPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term)
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://blog-website-7w3k.onrender.com/api/posts/${id}`);
      setPosts(posts.filter((post) => post._id !== id));
      setFilteredPosts(filteredPosts.filter((post) => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="w-screen mx-auto px-4 py-8">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-bold sm:text-xl md:text-2xl">All Blog Posts</h2>
    <div className="relative w-1/5 pr-2 sm:mr-2"> 
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
      />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-2 border-b border-black focus:outline-none focus:ring-0"
      />
    </div>
  </div>

      <div className="space-y-8">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div key={post._id} className="border border-gray-200 rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.content.slice(0, 150)}...</p>
              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-500">By {post.author || 'Anonymous'}</div>
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
          ))
        ) : (
          <p className="text-gray-500 text-center">No matching blog post found.</p>
        )}
      </div>

      {filteredPosts.length > postsPerPage && (
    <div className="flex justify-center items-center mt-8">
      <nav aria-label="Pagination" className="flex items-center gap-2">
        <button
          onClick={() => currentPage > 1 && paginate(currentPage - 1)}
          className="text-gray-700 hover:bg-gray-200 p-2 rounded-md"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              currentPage === index + 1
                ? 'bg-orange text-white'
                : 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
          className="text-gray-700 hover:bg-gray-200 p-2 rounded-md"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </nav>
    </div>
  )}
</div>
  );
};

export default Blogs;
