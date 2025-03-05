import React, { useState } from "react";
import { Link } from "react-router-dom";  

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <header className="p-4 border-b bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-6">
          <li>
            <Link to="/About" className="text-gray-700 hover:text-blue-600">About</Link> 
          </li>
          <li>
            <Link to="/Blogs" className="text-gray-700 hover:text-blue-600">Blog</Link> 
          </li>
          <li>
            <Link to="/Create" className="text-gray-700 hover:text-blue-600">Create Post</Link> 
          </li>
        </ul>

        <div className="text-4xl font-bold text-gray-700">
          KODEMOR
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="search"
            className="border rounded-lg px-3 py-1 outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Search..."
          />

<div className="relative">
            <button className="focus:outline-none" onClick={toggleDropdown}>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
            </button>
            <ul 
              className={`absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
              </li>
              <li>
                <hr className="border-gray-300" />
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;