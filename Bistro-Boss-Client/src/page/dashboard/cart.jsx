import React from 'react';
import useCart from '../../hooks/useCart';

const cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    
    return (
        <div>
            <div>
                <h2 className='text-6xl'>Items: {cart.length}</h2>
                <h2 className='text-6xl'>Total Price: {totalPrice}</h2>
                <button className='btn btn-outline'>Pay</button>
            </div>
        </div>
    );
};

export default cart;