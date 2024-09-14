import React, { useState } from 'react'; 
import Navbar from '../../layouts/navbar';
import { Images, JsonData } from "../../constant";
import Footer from '../../layouts/footer';

const Blog = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    
    const blogPosts = currentPage === 1 ? JsonData.Products.slice(0, 2) : JsonData.Products.slice(2, 3);
    const sidebarProducts = JsonData.Products.slice(3, 10); 
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
        <>
        <Navbar/>
        <div className="mt-[10vh] w-full flex flex-col ">
        <img src={Images.bgBlog} className="" alt="background" />
        </div>
        
        <div className="container w-[90vw] mx-auto py-8 flex gap-10">
      
        <div className="  px-4">
          {blogPosts.map((item, index) => (
            <div key={index} className="mb-8 bg-white p-4 w-[60w]">
              <div className="relative">
                <img 
                  src={Images[item.img]} 
                  alt={item.name} 
                  className="w-[53vw] h-[80vh] object-cover"
                />
                <div className="absolute bottom-4 left-0 bg-black text-white px-4 py-1 text-sm font-semibold">
                  {item.date}
                </div>
              </div>
              <h2 className="text-2xl font-semibold mt-4">{item.name}</h2>
              <p className="text-gray-600 mt-2 w-[50vw] ">{item.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-500">By {item.designer}</span>
              
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-8 me-96">
            <button
              onClick={() => handlePageChange(1)}
              className={`px-4 py-2 mx-2 rounded-full ${
                currentPage === 1 ? 'bg-black text-white' : 'bg-white text-black border-[1px]'
              }`}
            >
              1
            </button>
            <button
              onClick={() => handlePageChange(2)}
              className={`px-4 py-2 mx-2 rounded-full ${
                currentPage === 2 ? 'bg-black text-white' : 'bg-white text-black border-[1px]'
              }`}
            >
              2
            </button>
          </div>
        </div>

 
        <aside className="  px-4 mt-20 ">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          <ul>
            {sidebarProducts.map((item, index) => (
              <li key={index} className="mb-4 flex ">
                <img
                  src={Images[item.img]} alt={item.name} className="w-[9vw] h-[22vh]  mr-4"
                />
                <div>
                  <h3 className="text-[16px] font-medium w-[10vw] mt-5 text-gray-600">{item.name}</h3>
                  <span className="text-gray-600 text-sm">£{item.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Tags Cloud</h2>
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-600 bg-transparent border-[1px] px-3 py-1 rounded-full text-sm">crafts</span>
              <span className="text-gray-600 bg-transparent border-[1px] px-3 py-1 rounded-full text-sm">street style</span>
            </div>
          </div>
        </aside>


      </div>


        <Footer/>
        </>
        
    );
};

export default Blog;