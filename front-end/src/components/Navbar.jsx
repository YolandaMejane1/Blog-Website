import React from "react";

const Navbar = () => {
  return (
    <header className="p-4 border-b bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">Blog</a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">Create Post</a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <input
            type="search"
            className="border rounded-lg px-3 py-1 outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Search..."
          />

          <div className="relative">
            <button className="focus:outline-none">
              <img
                src="https://github.com/mdo.png"
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
            </button>
            <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg hidden">
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
