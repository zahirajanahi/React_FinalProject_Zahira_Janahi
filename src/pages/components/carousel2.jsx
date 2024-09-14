import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Swal from 'sweetalert2';
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { Images, JsonData } from '../../constant';
import '../../index.css';

function CarouselTwo({ addToCart }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const sliderRef = React.useRef(null);
  const EightProducts = JsonData.Products.slice(3, 11);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleAddToCart = (product) => {
    addToCart(product);

    Swal.fire({
      title: `${product.name}`,
      text: 'is added to the cart!',
      icon: 'success',
    });
  };

  return (
    <div className="slider-container overflow-hidden pt-10 relative pb-28">
      <h2 className="text-center text-3xl font-bold mb-14">Featured Products</h2>

      <Slider {...settings} ref={sliderRef} className="w-[80vw] mx-auto">
        {EightProducts.map((product, index) => (
          <div key={index} className="px-2">
            <div className="relative group overflow-hidden bg-white h-[52vh] w-[17vw] hover:bg-gray-500 transition-all duration-500">
              <img
                src={Images[product.img]}
                alt={product.name}
                className="h-[52vh] w-[17vw] object-cover group-hover:opacity-40 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <button
                className="absolute top-72 translate-x-[-50%] left-1/2 transform -translate-y-[50%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out h-[6vh] w-[10vw] bg-black text-white rounded-full font-medium font-sans hover:bg-red-500"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
            <div className="font-sans text-gray-500 mt-4">
            
               <Link to={`/product/${product.id}`}>
                <p className="titleprdct hover:text-red-400 duration-300">{product.name}</p>
              </Link>
              <p className="text-gray-500">£{product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </Slider>

      <button
        onClick={handlePrev}
        className="absolute left-[80px] top-1/2 transform -translate-y-1/2 text-gray-300 text-5xl p-3"
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-[100px] top-1/2 transform -translate-y-1/2 text-gray-300 text-5xl p-3"
      >
        <MdOutlineNavigateNext />
      </button>
    </div>
  );
}

export default CarouselTwo;
