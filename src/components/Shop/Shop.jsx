import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Shop.css'
import Phone from '../Phone/Phone';
import toast, { Toaster } from 'react-hot-toast';
import Cart from '../Cart/Cart';

const Shop = () => {
    const phones =useLoaderData();
    
    const [cart,setCart]=useState([])
    
    const handleAddToCart = (phone) =>{
        const exists =cart.find(ph => ph.id === phone.id);
        if(exists) {
          toast('Already added to cart')
        }
        else{
            const newCart =[...cart, phone]
            setCart(newCart)
        }
    };

    const handleRemoveFromCart=id=>{
        const remaining =cart.filter(sideCart => sideCart.id !== id);
        setCart(remaining);
    }

    return (
        <div className='shop-container my-container my-3 '>
{/* phones display section  */}
        <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2 ">
        {
                    phones.map(phone =>(
                       <Phone
                       key={phone.isbn13}
                       phone={phone}
                       handleAddToCart={handleAddToCart}
                       ></Phone>
                    ))
         }
        </div>

{/* cart section */}
            <div className='cart-container '>
                <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
                </div>
        </div>
    );
};

export default Shop;