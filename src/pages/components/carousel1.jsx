import React from 'react';
import Slider from "react-slick";
import { Images } from '../../constant';
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';

function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const sliderRef = React.useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="slider-container overflow-hidden h-[100vh] pt-10 relative">
      <Slider {...settings} ref={sliderRef}>
        <div className='relative'>
          <img src={Images.imgcarousel1} className="h-[85vh] object-cover" alt=""/> 
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col'>
            <p className='text-white text-[20px] text-center text-2xl font-mono'>Women Collection 2018</p>
            <p className='text-white text-[60px] font-bold text-center'>NEW ARRIVALS</p>
            <button className='bg-white py-3 px-12 m-auto rounded-full mt-7'>SHOP NOW</button>
          </div>
        </div>
        <div className='relative'>
          <img src={Images.imgcarousel2} className="h-[85vh] object-cover" alt=""/> 
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col'>
            <p className='text-white text-[20px] text-center text-2xl font-mono'>Women Collection 2018</p>
            <p className='text-white text-[60px] font-bold text-center'>NEW ARRIVALS</p>
            <button className='bg-white py-3 px-12 m-auto rounded-full mt-7'>SHOP NOW</button>
          </div>
        </div>
        <div className='relative'>
          <img src={Images.imgcarousel3} className="h-[85vh] object-cover" alt=""/> 
          <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col'>
            <p className='text-white text-[20px] text-center text-2xl font-mono'>Women Collection 2018</p>
            <p className='text-white text-[60px] font-bold text-center'>NEW ARRIVALS</p>
            <button className='bg-white py-3 px-12 m-auto rounded-full mt-7'>SHOP NOW</button>
          </div>
        </div>
      </Slider>
      <button 
        onClick={handlePrev} 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 hover:bg-red-400 duration-500"
      >
        <GrFormPrevious />
      </button>
      <button 
        onClick={handleNext} 
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 hover:bg-red-400 duration-500"
      >
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
}

export default Carousel;
