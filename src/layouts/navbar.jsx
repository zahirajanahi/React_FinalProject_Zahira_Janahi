import React from 'react';
import { FiShoppingBag, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 shadow-sm fixed z-10 top-0 right-0 left-0 bg-white">

      <div className="text-3xl font-bold text-black ps-10">
        Fashe<span className="text-red-500">.</span>
      </div>

      <ul className="flex space-x-6 text-gray-700 text-md ">
        <li className="hover:text-gray-900 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <Link to="/sale">Sale</Link>
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <Link to="/features">Features</Link>
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-gray-900 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="flex items-center space-x-4 pe-10">
        <FiUser className="text-gray-500 hover:text-gray-700 w-6 h-6 cursor-pointer" />
        <div className="h-6 border-r border-gray-400"></div>
        <div className="relative">
          <FiShoppingBag className="text-gray-500 hover:text-gray-700 w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
