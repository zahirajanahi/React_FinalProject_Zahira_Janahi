import React, { useState } from 'react'; // Import useState hook
import { Images, JsonData } from "../../constant";
import Navbar from '../../layouts/navbar';
import Footer from '../../layouts/footer';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  // Pagination logic: If currentPage is 1, show first 6 items, else show 2 items
  const selectedProducts = currentPage === 1
    ? JsonData.Products.slice(3, 9) // Display first 6 products (4th to 9th)
    : JsonData.Products.slice(9, 11); // Display only 2 products (10th to 11th)

  return (
    <>
      <Navbar />
      <div className="mt-[10vh] w-full flex flex-col ">
        <img src={Images.bgProduct} className="" alt="background" />
      </div>
      <div className="container w-[80vw] mx-auto py-8">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-[25%] p-4">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Best Seller (8 items)</li>
              <li className="hover:underline cursor-pointer">Men (8 items)</li>
              <li className="hover:underline cursor-pointer">Women (8 items)</li>
            </ul>

            <h2 className="text-lg font-semibold my-4">Color</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Black</li>
              <li className="hover:underline cursor-pointer">Gray</li>
              <li className="hover:underline cursor-pointer">Red</li>
            </ul>

            <h2 className="text-lg font-semibold my-4">Price</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">0-20</li>
              <li className="hover:underline cursor-pointer">20-40</li>
            </ul>

            <h2 className="text-lg font-semibold my-4">Size</h2>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">L</li>
              <li className="hover:underline cursor-pointer">M</li>
              <li className="hover:underline cursor-pointer">S</li>
              <li className="hover:underline cursor-pointer">XL</li>
            </ul>
          </aside>

          
          <div className="w-[85%] ms-7 grid grid-cols-3 gap-6">
            {selectedProducts.map((item, index) => (
              <div key={index} className="p-4">
                <div className='relative group overflow-hidden bg-white  h-[50vh] w-[18vw] hover:bg-gray-500 transition-all duration-500'>
                    <img
                  src={Images[item.img]} 
                  alt={item.name}
                  className=" object-cover  group-hover:opacity-40 transition-opacity duration-300"
                />
                 <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="absolute  top-72 translate-x-[-50%]  left-1/2 transform  -translate-y-[50%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out h-[6vh] w-[10vw] bg-black text-white rounded-full font-medium font-sans hover:bg-red-500">
                  Add to Cart
                </button>
                </div>
              
                <h3 className="mt-4 text-[17px] text-gray-600  hover:text-red-400 duration-300">{item.name}</h3>
                <p className="mt-2 text-lg text-gray-600">£{item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/*Buttons */}
        <div className="flex justify-center mt-8 me-96">
          <button
            onClick={() => setCurrentPage(1)} 
            className={`mx-2 px-4 py-2 rounded-full ${currentPage === 1 ? 'bg-black text-white' : 'bg-white text-black border-[1px]'}`}
          >
            1
          </button>
          <button
            onClick={() => setCurrentPage(2)} 
            className={`mx-2 px-4 py-2 rounded-full ${currentPage === 2 ? 'bg-black text-white' : 'bg-white text-black border-[1px]'}`}
          >
            2
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
