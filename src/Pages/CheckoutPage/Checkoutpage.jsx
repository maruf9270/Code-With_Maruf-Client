import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkoutpage = () => {
    const data = useLoaderData()
   
    return (
        <div className='w-full lg:w-[90%] mx-auto '>
          
            <div className='bg-primary lg:px-4 py-10 flex flex-col items-center'>
                
            <div className='bg-base-100 text-white px-9 py-5 rounded text-2xl font-bold mb-7'>
                {data.c_name}
            </div>
            
         
                <img src={data.b_image} alt="" />
            
                <div className='py-10'>
                    {
                        data.c_details
                    }

                </div>

                <div className='py-10'>
                    {
                        data.c_details_2
                    }

                </div>


            </div>

            
        </div>
    );
};

export default Checkoutpage;