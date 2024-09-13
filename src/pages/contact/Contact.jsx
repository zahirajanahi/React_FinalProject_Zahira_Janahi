import React from 'react';
import { Images, JsonData } from "../../constant"; 
import Navbar from '../../layouts/navbar';
import Footer from "../../layouts/footer";

const Contact = (props) => {
    return (
        
       <>
       <Navbar/>
       <div className="mt-[10vh] w-full flex flex-col">
      <div className="h-[35vh] ">
        <img src={Images.bgContact} className="w-[100%] h-[100%]" alt="" />
      </div>
      <div className="flex gap-x-10 h-[90vh] w-full py-14 px-[10vw]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.423448427251!2d-7.663010125181926!3d33.51637454583712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62cf8ca24cbf3%3A0xa05daf5045d82588!2sCasablanca!5e0!3m2!1sfr!2sma!4v1726155144398!5m2!1sfr!2sma"
          width="600"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        <form action="" className="flex flex-col gap-y-5 w-[40vw] ">
           <h1 className='text-2xl'>Send us your message</h1>
          <input
            type="text"
            placeholder="Name"
            className="px-10 py-3 border-[1px] border-gray-300"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-10 py-3 border-[1px] border-gray-300"
          />
          <input
            type="text"
            placeholder="Phone"
            className="px-10 py-3 border-[1px] border-gray-300"
          />
          <textarea
            placeholder="Message"
            className="px-10 py-3 border-[1px] border-gray-300"
          />
          <button className="w-[11vw] bg-black text-white px-4 py-3 rounded-full">
            SEND
          </button>
        </form>
      </div>
    </div>
   <Footer/>
       </>
    );
};

export default Contact;