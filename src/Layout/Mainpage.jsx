import React from 'react';
import Navber from '../Shard/Navber/Navber';
import {Outlet} from 'react-router-dom'
import Footer from '../Shard/Footer/Footer';


const Mainpage = () => {
    return (
        <div>
          
            <Navber></Navber>
            <div className='minh-[80vh]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>

          
    
        </div>
    );
};

export default Mainpage;