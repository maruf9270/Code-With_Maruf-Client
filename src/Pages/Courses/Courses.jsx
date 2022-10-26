import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SIngleCategory from './SingleCategory/SIngleCategory';

const Courses = () => {
    const categories= useLoaderData()
    
    return (
        <div className='flex sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 h-full'>
           <div className='flex flex-col h-full'>
            {
                categories.map(c=><SIngleCategory categorie={c} key={c.id}></SIngleCategory>)
            }
           </div>
           <div>
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Courses;