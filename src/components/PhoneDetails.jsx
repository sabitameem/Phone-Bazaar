import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
       <div className='my-container'>
         <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
             <div className=' lg:w-1/2 h-full'>
                <img className='object-cover w-full  lg:h-full' src={data.picture} alt="" 
                />
            </div> 
           <div className='p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
           <h2 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>{data.name}</h2>
            <h3 className='text-xl font-semibold  text-gray-900'>Price :{data.price}</h3>
            <h4 className='text-lg font-medium'>Storage :{data.storage}</h4>
            <h5 className='text-lg font-medium mt-2'> <span className='bg-orange-500 text-white rounded-md p-1'>Details :</span> {data.details}</h5>
           </div>
        </div>
        {/* <Link to='../shop'>
             <button className='btn'>Back to shop page</button>
        </Link> */}

       </div>
    );
};

export default PhoneDetails;