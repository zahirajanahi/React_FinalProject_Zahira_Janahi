import React from 'react';
import { Images, JsonData } from "../../constant"; 
import Navbar from '../../layouts/navbar';
import Footer from "../../layouts/footer";

const About = (props) => {
    return (
        <>
          <Navbar/>
          <div className="mt-[10vh] w-full flex flex-col ">
          <img src={Images.bgAbout} className="" alt="" />

          
          <div className="py-12 xl:flex justify-center gap-x-10 ">
          <div className="w-[24vw] h-[68vh] overflow-hidden ">
          <img
            src={Images.product6}
            className="w-[100%] h-[100%] hover:scale-110 duration-500 object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-y-3 w-[50vw] pt-2">
          <h1 className="text-xl">Our story</h1>
          <p className="text-gray-400 text-lg ">
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
            orci.
          </p>
          <div className="ps-7 pt-3 border-s-2 p-4 mt-3 border-gray-400">
            <p className="text-gray-400 text-lg">
              Creativity is just connecting things. When you ask creative people
              how they did something, they feel a little guilty because they
              didn't really do it, they just saw something. It seemed obvious to
              them after a while.
            </p>
            <p className="text-gray-500">- Steve Job’s</p>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
        </>
    );
};

export default About;