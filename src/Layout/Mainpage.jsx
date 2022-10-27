import React from 'react';
import Navber from '../Shard/Navber/Navber';
import {Outlet} from 'react-router-dom'
import Footer from '../Shard/Footer/Footer';
import { ToastContainer } from 'react-toastify';


const Mainpage = () => {
    return (
        <div>
          
            <Navber></Navber>
            <div className='min-h-[80vh]'>

            <Outlet></Outlet>
            <ToastContainer/>
            </div>
            <Footer></Footer>

          
    
        </div>
    );
};

export default Mainpage;