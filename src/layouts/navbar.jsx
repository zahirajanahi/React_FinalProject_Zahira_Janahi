import React, { useState } from 'react';
import { FiShoppingBag, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Images, JsonData } from "../constant";

const Navbar = ({ cartItems = [] }) => {
  const [Cart, setCart] = useState(false);
  const toggleCart = () => {
    setCart(!Cart);
  };

   
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <nav className="flex items-center justify-between py-4 px-6 shadow-sm fixed z-10 top-0 right-0 left-0 bg-white">
      <div className="text-3xl font-bold text-black ps-10">
        Fashe<span className="text-red-500">.</span>
      </div>

      <ul className="flex space-x-6 text-gray-700 text-md">
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
      <Link to="/auth">
       <FiUser className="text-gray-500 hover:text-gray-700 w-6 h-6 cursor-pointer" />
     </Link>
        <div className="h-6 border-r border-gray-400"></div>
        <div className="relative">
          <FiShoppingBag
            className="text-gray-500 hover:text-gray-700 w-6 h-6 cursor-pointer"
            onClick={toggleCart}
          />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            {cartItems.length}
          </span>
        </div>
      </div>

      {Cart && (
        <div className="fixed top-16 right-10 w-80 h-auto bg-white shadow-lg p-6 z-20 overflow-auto">

          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <img
                    src={Images[item.img]} 
                    alt={item.name}
                    className="w-20 h-24"
                  />
                  <div className="flex-1 pl-4">
                    <p className="hover:text-red-400 duration-500">{item.name}</p>
                    <p> £{item.price.toFixed(2)}</p>
                  </div>
                  <button className="text-black ">x</button>
                </div>
              ))}

             
              <div className="flex gap-3 items-center ms-32 mt-4  pt-4">
                <p className="">Subtotal:</p>
                <p className="">£{subtotal.toFixed(2)}</p>
              </div>

           
              <div className="flex gap-4 mt-6">
                <button className="bg-black text-white px-7 py-3 rounded-full hover:bg-red-500 duration-500">
                  View Cart
                </button>
                <button className="bg-black text-white px-7 py-3 rounded-full  hover:bg-red-500 duration-500">
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <p>No items in cart.</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
