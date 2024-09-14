import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Images, JsonData } from '../../constant';
import CarouselTwo from '../components/carousel2';
import Footer from '../../layouts/footer';

const ProductDetail = () => {
  const { id } = useParams();
  const product = JsonData.Products.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [additionalInfoOpen, setAdditionalInfoOpen] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6 grid md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <img
            src={Images[product.img]}
            alt={product.name}
            className="w-[30vw] h-[80vh] mt-20"
          />
        </div>

        <div className="mt-20">
          <h1 className="text-2xl text-gray-700 mb-4">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">£{product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-4 w-[35vw]">{product.description}</p>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2">Size</h3>
            <div className="flex space-x-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className="px-4 py-1 border border-red-500 rounded hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <div className="flex space-x-2">
              <div className="w-12 h-8 bg-gray-400 border-[1px] border-red-500"></div>
              <div className="w-12 h-8 bg-red-500 border-[1px] border-red-500"></div>
              <div className="w-12 h-8 bg-gray-600 border-[1px] border-red-500"></div>
            </div>
          </div>

          <div className="flex gap-5 items-center mt-10">
            <div className="flex items-center mb-4">
              <button onClick={decreaseQuantity} className="px-3 py-1 border-2 text-white text-xl bg-gray-300 border-gray-300">-</button>
              <span className="px-3 text-xl py-1 border-2 border-gray-300">{quantity}</span>
              <button onClick={increaseQuantity} className="px-3 py-1 border-2 text-white text-xl bg-gray-300 border-gray-300">+</button>
            </div>
            <button className="bg-black text-white px-6 py-2 mb-4 rounded-full hover:bg-red-500 duration-500">Add to Cart</button>
          </div>

          <div className="text-gray-500 flex gap-5 mt-16">
            <p><span className="font-semibold">Brand:</span> MyVendor</p>
            <p><span className="font-semibold">Categories:</span> Boxy, Shirts, Sleeveless</p>
          </div>

          {/* Toggle Sections */}
          <div className="mt-10 ">
            <h2 className="font-semibold cursor-pointer" onClick={() => setDescriptionOpen(!descriptionOpen)}>

              <div className='flex gap-[360px] hover:text-red-400 duration-500'>
                    <p>Description  </p>
                    <p className='text-xl'>{descriptionOpen ? '-' : '+'}</p>
                    
                </div>
            </h2>
            {descriptionOpen && (
              <p className="mt-2 text-gray-600 text-sm w-[30vw]">{product.description}</p>
            )}
          </div>

          <div className="mt-6">
            <h2 className="font-semibold cursor-pointer" onClick={() => setAdditionalInfoOpen(!additionalInfoOpen)}>
              <div className='flex gap-[275px]'>
                    <p>Additional Information </p>
                    <p className='text-xl'>{additionalInfoOpen ? '-' : '+'}</p>
                    
                </div>
            </h2>
            {additionalInfoOpen && (
              <p className="mt-2 text-gray-600 w-[35vw] text-sm">You can use this tab for adding shipping details, return policies and information or measurements etc.

              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
               vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi</p>
            )}
          </div>

          <div className="mt-6">

            <h2 className="font-semibold cursor-pointer" onClick={() => setReviewsOpen(!reviewsOpen)} >
                <div className='flex gap-96'>
                    <p>Reviews </p>
                    <p className='text-xl'>{reviewsOpen ? '-' : '+' }</p>
                    
                </div>
              
            </h2>

            {reviewsOpen && (
              <p className="mt-2 text-gray-600">Based on 1 review Write a review</p>
            )}

          </div>
        </div>
      </div>

      <CarouselTwo />
      <Footer />
    </>
  );
};

export default ProductDetail;
