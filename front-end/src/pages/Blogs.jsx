import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
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
        const response = await axios.get('http://localhost:5001/api/posts');
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
      await axios.delete(`http://localhost:5001/api/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
      setFilteredPosts(filteredPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="w-screen mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6 px-8">
        <h3 className="font-thin sm:text-sm md:text-2xl">All Posts</h3>
        <div className="relative sm:w-1/8 max-w-1/2">
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

      <div className="space-y-8 px-8">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row border border-black">
              {post.image_url && (
                <div className="w-full md:w-1/2">
                  <img
                    src={`http://localhost:5001${post.image_url}`} 
                    alt={post.title}
                    style={{ maxWidth: '100%' }}
                    className="object-cover h-72 w-full md:mr-4"
                    onError={(e) => e.target.src = '/assets/nasa-Q1p7bh3SHj8-unsplash.jpg'}
                  />
                </div>
              )}
              <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
                <div>
                  <h3 className="text-2xl font-normal mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{moment(post.created_at).format('MMMM D, YYYY')}</p>
                  <p className="text-black font-light mb-4">{post.content.slice(0, 150)}...</p>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-2 border-t border-black">
                  <div className="text-sm text-black">By {post.author || 'Anonymous'}</div>
                  <div className="flex gap-4">
                    <Link to={`/post/${post.id}`} className="text-black hover:underline">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </Link>
                    <button onClick={() => deletePost(post.id)} className="text-black hover:underline">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <Link to={`/edit/${post.id}`} className="text-black hover:underline">
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                  </div>
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
                    ? 'bg-black text-white'
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

