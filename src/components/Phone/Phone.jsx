import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({phone,handleAddToCart}) => {
    const {id,name,price,picture,storage,details}= phone;
    return (
        
            <div title='Click' className='p-3 rounded-lg shadow-lg overflow-hidden h-full'>
            
               <img className='w-full h-64' src={picture} alt="" />
               <h2 className='text-2xl font-bold'>{name.slice(0,5)+'...'}</h2>
               <h3 className='text-xl font-semibold'>Price : {price}</h3>
            
            <button onClick={()=> handleAddToCart(phone)} className='btn'>Add To Cart</button>
            </div>
        
    );
};

export default Phone;