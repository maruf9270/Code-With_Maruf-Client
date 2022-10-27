import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {GrDocumentDownload} from 'react-icons/gr'
import Pdf from "react-to-pdf";


const SingleCourseDetails = () => {
    const ref = React.createRef();
    const data = useLoaderData();
    console.log(data);
    
    
    return (
        <div className='w-full lg:w-[95%] bg-primary lg:mx-auto rounded ml-4 px-3 py-10 flex flex-col justify-center' ref={ref}>
        <div className='p-5 mx-auto bg-base-100 inline-block rounded '>
          <div className='flex items-center justify-center'>
          <h3 className='text-white font-bold text-3xl mr-4'>
           {
                data.c_name
            }
           
           </h3>
           
           <Pdf targetRef={ref} filename={`${data.c_name}.pdf`}>
                {({ toPdf }) => <button onClick={toPdf} className='text-white bg-white '><GrDocumentDownload></GrDocumentDownload></button>}
           </Pdf>
           
          </div>

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