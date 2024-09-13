import React from 'react';
import Navbar from '../../layouts/navbar';
import Footer from '../../layouts/footer';
import { Link } from 'react-router-dom'; 


const Sale = (props) => {
    return (
       <>
       <Navbar/>

    <div className='h-[45vh]'>
          <p>
          Search
          </p>
     </div>

       <Footer/>
       </> 

    );
};

export default Sale;