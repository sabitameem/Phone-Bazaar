import React from 'react';
import {TrashIcon } from '@heroicons/react/24/solid';
import { Toaster } from 'react-hot-toast';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className='sticky top-0 z-50'>
            <h2 className='text-2xl font-bold text-center text-white bg-orange-500 rounded-lg p-2 mb-3'>Total Order Summary : {cart.length}</h2>
            {
                cart.map(ph =>
                    <p className='text-xl font-semibold inline-flex items-center mt-1'
                    key={ph.id}
                    >{ph.name}
                    <button onClick={()=> handleRemoveFromCart(ph.id)} className='mx-3'><TrashIcon className= "h-6 w-6 text-blue-500" /></button>
                    <Toaster />
                    </p>
                    
                    
                    )
            }
            
        </div>
    );
};

export default Cart;