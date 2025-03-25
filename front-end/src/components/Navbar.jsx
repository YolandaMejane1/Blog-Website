import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/round-icons-pH23lU99FVQ-unsplash.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div>
      <div className="bg-black text-white py-1 px-4 md:grid hidden">
        <div className="flex justify-between items-center">
          <Link to="/subscribe" className=" lg:text-lg md:text-md sm:text-xs italic underline hover:text-blue ">Special Offer: Follow Us and Stand a Chance to Get Full Access to Exclusive Tech Events!</Link>
          <Link to="#" className="flex gap-4 sm:px-1">
            <FontAwesomeIcon 
              icon={faFacebook} 
              className="text-white hover:text-blue-500 text-xl transition"
            />
            <FontAwesomeIcon 
              icon={faTwitter} 
              className="text-white hover:text-blue-400 text-xl transition"
            />
            <FontAwesomeIcon 
              icon={faInstagram} 
              className="text-white hover:text-pink-500 text-xl transition"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between max-w-full mx-auto py-2 px-4 bg-transparent">
        <div className="flex items-center">
          <img 
            src={Logo} 
            alt="Logo" 
            className="h-10 md:h-12 w-auto"
          />
          <span className="text-2xl font-semibold text-black ml-0">KODEMOR</span>
        </div>

        <ul className="hidden md:flex space-x-12 text-lg mt-3 ml-auto">
          <li><Link to="/About" className="text-black hover:text-gray-700">Home</Link></li>
          <li><Link to="/Blogs" className="text-black hover:text-gray-700">Blogs</Link></li>
          <li><Link to="/Create" className="text-black hover:text-gray-700">Create Post</Link></li>
        </ul>

        <button className="md:hidden text-gray-700" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white border-t flex flex-col space-y-2 py-3 text-center text-md">
          <li><Link to="/About" className="block py-2 text-black hover:text-gray-700">Home</Link></li>
          <li><Link to="/Blogs" className="block py-2 text-black hover:text-gray-700">Blog</Link></li>
          <li><Link to="/Create" className="block py-2 text-black hover:text-gray-700">Create Post</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
