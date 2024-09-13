import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../layouts/navbar";
import Carousel from "./components/carousel1";
import { Images, JsonData } from "../constant";
import Carousel2 from "./components/carousel2";
import Footer from "../layouts/footer";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const { Products } = JsonData || {}; 
  const sunglasses = Products && Products.length > 0 ? Products[Products.length - 1] : null;
  
  return (
    <>
      <Navbar />
      <Carousel />

        {/* section three */}
      <section className="section3 flex justify-center gap-5 h-[100vh] pb-16">
        {/* div1 */}
        <div className="relative flex flex-col gap-3">
          <div className="relative overflow-hidden w-[24vw] h-[70vh]">
            <img src={Images.item1} className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500" />
            <button 
              className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 text-black py-1 px-4 hover:bg-red-400 duration-500 font-mono text-sm"
              onClick={() => navigate('/shop')}
            >
              DRESSES
            </button>
          </div>
          <div className="relative overflow-hidden w-[24vw] h-[40vh]">
            <img src={Images.item5} className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 " />
            <button 
              className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm"
              onClick={() => navigate('/shop')}
            >
              FOOTWEAR
            </button>
          </div>
        </div>

        {/* div2 */}
        <div className="relative flex flex-col gap-3">
          <div className="relative overflow-hidden w-[24vw] h-[40vh]">
            <img src={Images.item3} className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 " />
            <button 
              className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm"
              onClick={() => navigate('/shop')}
            >
              WATCHES
            </button>
          </div>
          <div className="relative overflow-hidden w-[24vw] h-[70vh]">
            <img src={Images.item2} className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 " />
            <button 
              className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm"
              onClick={() => navigate('/shop')}
            >
              BAGS
            </button>
          </div>
        </div>

        {/* div3 */}
        <div className="relative flex flex-col gap-3">
          <div className="relative overflow-hidden w-[24vw] h-[70vh]">
            <img src={Images.item4} className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 " />
            <button 
              className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm"
              onClick={() => navigate('/shop')}
            >
              SUNGLASSES
            </button>
          </div>
          <div className="relative overflow-hidden w-[24vw] h-[40vh]">
            <img src={Images.item6} className="h-[100%] w-[100%] object-cover hover:scale-110 duration-500 " />
            <button 
              className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white opacity-95 hover:bg-red-400 duration-500 text-black py-1 px-4 font-mono text-sm"
              onClick={() => navigate('/shop')}
            >
              ACCESSORIES
            </button>
          </div>
        </div>
      </section>

      {/* section carousel 2*/}
      <Carousel2 />


     {/* section random product*/}
      {sunglasses && (
        <div className="  w-full py-16 bg-gray-100">

          <div className='flex w-[73vw] mx-auto gap-8'>

          <div className="w-1/2 relative">

          <div className='overflow-hidden '>
              <img  src={Images.item7}  alt="Lookbook"  className="w-[80vw] h-[57vh] object-cover hover:scale-110 duration-500 " />
          </div>
          
            <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-4xl font-bold pb-3">The Beauty</h1>
              <h2 className="text-5xl font-semibold ">LOOKBOOK</h2>
              <button className="mt-4 bg-transparent font-sans font-base py-2 px-6 text-lg hover:bg-white hover:text-black transition duration-300">
                VIEW COLLECTION
              </button>
            </div>
          </div>

          <div className="w-1/2 flex flex-col items-center justify-center bg-white p-10">
            <img
              src={Images[sunglasses.img]}
              alt={sunglasses.name}
              className="w-96 h-40 object-cover mb-8"
            />
            <h3 className="text-xl font-semibold">{sunglasses.name}</h3>
            <p className="text-lg text-gray-500">{`£${sunglasses.price.toFixed(2)}`}</p>
             <div className='flex gap-3 pt-5 '>
              <div className='border-[1px] px-2 border-gray-400 flex flex-col items-center'>
                <p className='text-lg'>-2082 </p>
                <p className='text-gray-400'>days</p>
              </div>
              <div className='border-[1px] px-5 pt-2 border-gray-400 flex flex-col items-center'>
                <p className='text-lg'>-23</p>
                <p className='text-gray-400'>hrs</p>
              </div> <div className='border-[1px] px-4 pt-2 border-gray-400 flex flex-col items-center'>
                <p className='text-lg'>-9 </p>
                <p className='text-gray-400'>mins</p>
              </div> <div className='border-[1px] px-4 pt-2 border-gray-400 flex flex-col items-center'>
                <p className='text-lg'>-16</p>
                <p className='text-gray-400'>secs</p>
              </div>
             </div>

          </div>
          </div>
          
        </div>
      )}

       {/* section our blog */}
       <section className="py-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold">Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-[80vw] mx-auto">
          {Products && Products.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-white overflow-hidden ">
              <div className=" overflow-hidden w-full h-64">
                <img src={Images[item.img]}  alt={item.name} className="w-[100%] h-[100%] object-cover hover:scale-110 duration-500 " />
              </div>
              <div className="pt-5">
                <h3 className="text-lg font-sans">{item.name}</h3>
                <p className="mt-2 text-gray-600">by <span className="text-black">{item.designer}</span> on <span className="text-black">{item.date}</span></p>
                <p className="mt-2 text-gray-600 pt-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* section follow us*/}
      <section className='pb-16'>
        <h1 className="text-center text-3xl font-semibold pt-16">@ FOLLOW US ON INSTAGRAM</h1>
        <div className="flex justify-evenly pt-20 pb-10">
          <div className="flex flex-col items-center pr-20 border-r border-gray-300"> 
            <h5 className="text-lg text-gray-600">Free Delivery Worldwide</h5>
            <p className="text-gray-400 text-[15px]">Mirum est notare quam littera gothica</p>
          </div>
          <div className="flex flex-col items-center pr-24 border-r border-gray-300"> 
            <h5 className="text-lg text-gray-600">30 Days Return</h5>
            <p className="text-gray-400 text-[15px]">Simply return it within 30 days for an exchange.</p>
          </div>
          <div className="flex flex-col items-center pl-4"> 
            <h5 className="text-lg text-gray-600">Store Opening</h5>
            <p className="text-gray-400 text-[15px]">Shop open from Monday to Sunday</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
