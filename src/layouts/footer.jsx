import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaGoogle, FaInstagram } from "react-icons/fa";

const Footer = (props) => {
    return (  
      <>
   <footer className="bg-[#f0f0f0]  py-10">
      <div className="container mx-auto px-4">

        <div className="flex justify-evenly gap-10 pt-10 pb-20 text-gray-600">
          
          {/* GET IN TOUCH Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <p className="text-sm mb-4">
              Any questions? Let us know in store at 8th floor,<br /> 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaPinterestP />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaGoogle />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <FaInstagram />
              </a>
            </div>
          </div>
          
          {/* CATEGORIES Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black">Men</a></li>
              <li><a href="#" className="hover:text-black">Women</a></li>
              <li><a href="#" className="hover:text-black">Dresses</a></li>
              <li><a href="#" className="hover:text-black">Sunglasses</a></li>
            </ul>
          </div>
          
          {/* LINKS Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black">Search</a></li>
              <li><a href="#" className="hover:text-black">About Us</a></li>
              <li><a href="#" className="hover:text-black">Contact Us</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
            </ul>
          </div>
          
          {/* HELP Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-black">Track Order</a></li>
              <li><a href="#" className="hover:text-black">Returns</a></li>
              <li><a href="#" className="hover:text-black">Shipping</a></li>
              <li><a href="#" className="hover:text-black">FAQs</a></li>
            </ul>
          </div>

          {/* NEWSLETTER Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <form>
              <input
                type="email"
                className="w-full p-2 mb-4 bg-transparent border-b-2 border-gray-300 "
                placeholder="Email Address"
              />
              <button className="w-32 p-2 bg-black text-white rounded-full hover:bg-gray-800">
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="text-center text-gray-400 text-sm mt-10">
          <p>Copyright © 2022 Shopify Theme Developed by MassTechnologist. All rights reserved.</p>
        </div>
      </div>
    </footer>

      </>
    );
};

export default Footer;