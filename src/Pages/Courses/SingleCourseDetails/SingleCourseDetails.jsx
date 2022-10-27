import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SingleCourseDetails = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div className='w-full lg:w-[95%] bg-primary lg:mx-auto rounded ml-4 px-3 py-10 flex flex-col justify-center'>
           <div className='p-5 mx-auto bg-base-100 inline-block rounded'>
           <h3 className='text-white font-bold text-3xl'>
           {
                data.c_name
            }
           </h3>

           </div>

            <div className='rounded my-6'>
                <img src={data.b_image} alt="" className='rounded'/>

            </div>

           <div className='my-10'>
            {
                data.c_details
            }
           </div>
           <div>
             <p>
             {
                data.c_details_2
             }
             </p>
           </div>
           <div className='flex justify-end mt-10'>
             <Link to={`/checkout/${data.id}`}>
             <button className='btn'>
                Get premium access
             </button>
             </Link>
           </div>
            
        </div>
    );
};

export default SingleCourseDetails;