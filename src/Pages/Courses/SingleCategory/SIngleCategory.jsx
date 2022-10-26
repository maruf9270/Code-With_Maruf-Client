import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCategory.css'

const SIngleCategory = (c) => {
    const data = c.categorie
    console.log(data);
    return (
       <Link to={`/courses/course/${data.id}`}>
           <div className='h-20 lg:w-40 w-20 course-card mb-2 flex'>
                <div className='w-[100%] lg:w-[40%]'>
                    image

                </div>
                <div className='lg:w-[60%] hidden lg:flex items-center justify-center text-xl font-bold'>
                    {data.c_name}

                </div>

           </div>
      
       </Link>
    );
};

export default SIngleCategory;