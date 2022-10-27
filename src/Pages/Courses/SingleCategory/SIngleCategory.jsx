import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCategory.css'

const SIngleCategory = (c) => {
    const data = c.categorie

    return (
       <Link to={`/courses/course/${data.id}`}>
           <div className='h-20 lg:w-44 w-20 course-card mb-2 flex bg-base-100'>
                <div className='w-[100%] lg:w-[40%] '>
                    <img src={data.img} alt="" className='w-20 h-20 images-c'/>

                </div>
                <div className='lg:w-[60%] hidden text-white lg:flex items-center justify-center text-xl font-bold'>
                    {data.c_name}

                </div>

           </div>
      
       </Link>
    );
};

export default SIngleCategory;