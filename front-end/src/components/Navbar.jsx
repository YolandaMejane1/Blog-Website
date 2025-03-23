import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div>
      <div className="bg-black text-white py-1 px-4">
        <div className="flex justify-between items-center">
          <div className="lg:text-lg md:text-md sm:text-xs italic underline ">Special Offer: Get Full Access to Exclusive Tech Events!</div>
          <Link to="/subscribe" className="bg-white text-black px-6 py-1 rounded-lg text-sm font-semibold hover:bg-blue-200 transition sm:px-1">
            Subscribe Now
          </Link>
        </div>
      </div>
      <div className=" flex items-center justify-between max-w-full mx-auto py-2 px-4 bg-transparent">
        <div className="text-xl font-semibold text-black">KODEMOR</div>

        <ul className="hidden md:flex space-x-6 text-md mt-3">
          <li><Link to="/About" className="text-black hover:text-gray-700">About</Link></li>
          <li><Link to="/Blogs" className="text-black hover:text-gray-700">Blog</Link></li>
          <li><Link to="/Create" className="text-black hover:text-gray-700">Create Post</Link></li>
          <li className="relative pl-4 w-38 bottom-2">
            <FontAwesomeIcon icon={faSearch} className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs" />
            <input
              type="text"
              placeholder=" Search..."
              className="w-full  pl-6 pr-2 py-1.5 text-md border border-gray-200 rounded-3xl focus:outline-none focus:ring-1 focus:ring-blue-100"
            />
          </li>
        </ul>

        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>

        <div className="relative hidden md:block">
          <button className="focus:outline-none" onClick={toggleDropdown}>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Profile"
              className="w-8 h-8 rounded-full border "
            />
          </button>
          <ul className={`relative right-10 mr-0 w-32 bg-white border rounded-lg shadow-lg text-sm ${isDropdownOpen ? "block" : "hidden"}`}>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a></li>
            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a></li>
            <li><hr className="border-gray-300" /></li>
            <li><a href="#" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Sign out</a></li>
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white border-t flex flex-col space-y-2 py-3 text-center text-md">
          <li><Link to="/About" className="block py-2 text-black hover:text-gray-700">About</Link></li>
          <li><Link to="/Blogs" className="block py-2 text-black hover:text-gray-700">Blog</Link></li>
          <li><Link to="/Create" className="block py-2 text-black hover:text-gray-700">Create Post</Link></li>
        </ul>
      )}
     </div>
  );
};


export default Navbar;
