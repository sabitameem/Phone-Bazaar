import React from 'react';
import Lottie from 'lottie-react'
import mobile from '../assets/139823-sharing-content-on-social-media.json'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='my-container lg:flex'>
            <div>
               <h3 className='text-4xl font-bold text-orange-500 '>BEST MOBILE</h3>

               <h5 className='text-2xl mt-4'>Searching for Best Mobiles? At <span className='italic hover:not-italic text-orange-500'>Phone Bazaar</span>, you can find latest Mobiles with Mobiles Buying Guide, Tips, Expert Reviews & Mobiles Comparison.
               <br />
               Buy mobile phone at the best price from <span className='text-orange-500 italic hover:not-italic'>Phone Bazaar</span>. Shop from top international brands with Official Warranty, EMI facilities, 3 Hour Delivery.
               </h5>
               <div className='flex gap-5'>
               <Link to='/shop'><button className='btn'>Buy Now</button></Link>
               
               <Link to='/about'><button className='btn'>Learn More</button></Link>
               </div>
            </div>

            {/* Lottie Animation */}
      <div className='relative lg:w-1/2 '>
        <div className='w-full lg:w-4/5 lg:ml-auto h-64  sm:min-h-fit'>
        <Lottie animationData={mobile} loop={true} />
        </div>
      </div>
        </div>
    );
};

export default Home;