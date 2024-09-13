import React from 'react';
import Navbar from '../../layouts/navbar';
import Footer from '../../layouts/footer';

const Features = (props) => {
    return (
       <>
       <Navbar/>
       <div className='h-[50vh] bg-black relative'>
               <h1 className='absolute text-white  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-5xl font-bold'>FEATURES</h1>
       </div>
       <div className='h-[20vh]'>

       </div>
       <Footer/>
       </>
    );
};

export default Features;