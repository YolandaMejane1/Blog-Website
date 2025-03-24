import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from '../assets/round-icons-pH23lU99FVQ-unsplash.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div>
      <div className="bg-black text-white py-1 px-4">
        <div className="flex justify-between items-center">
          <Link to="/subscribe" className="lg:text-lg md:text-md sm:text-xs italic underline hover:text-orange">Special Offer: Get Full Access to Exclusive Tech Events!</Link>
          <Link to="/subscribe" className="bg-white text-black px-6 py-1 rounded-lg text-sm font-semibold hover:bg-orange transition sm:px-1">
            Subscribe Now
          </Link>
        </div>
      </div>
      <div className=" flex items-center justify-between max-w-full mx-auto py-2 px-4 bg-transparent">
      <div className="flex items-center">
  <img 
    src={Logo} 
    alt="Logo" 
    className="h-10 md:h-12 w-auto"
  />
  <span className="text-2xl font-semibold text-black ml-0">KODEMOR</span>
</div>

        <ul className="hidden md:flex space-x-6 text-md mt-3">
          <li><Link to="/About" className="text-black hover:text-gray-700">About</Link></li>
          <li><Link to="/Blogs" className="text-black hover:text-gray-700">Blogs</Link></li>
          <li><Link to="/Create" className="text-black hover:text-gray-700">Create Post</Link></li>
        </ul>

        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>

        <div className="relative hidden md:block">
  <button className="focus:outline-none">
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <Link to="/signup" className="px-4 py-1 bg-black text-white rounded-md hover:underline text-center">
        Sign Up
      </Link>
      <Link to="/login" className="px-4 py-1 bg-white text-black border border-black rounded-md hover:underline text-center">
        Login
      </Link>
    </div>
  </button>
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
