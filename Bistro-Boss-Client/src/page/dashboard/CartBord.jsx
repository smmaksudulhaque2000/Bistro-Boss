import React from 'react';
import useCart from '../../hooks/useCart';

const CartBord = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <div className='flex justify-between border border-blue-700 p-4'>
                <h2 className='text-4xl'>Items: {cart.length}</h2>
                <h2 className='text-4xl'>Total Price: ${totalPrice.toFixed(2)}</h2>
                <button className='btn btn-outline'>Pay</button>
            </div>

            <div className='mt-8'>
                <table className='table-auto w-full border-collapse border border-gray-300'>
                    <thead>
                        <tr className='bg-blue-100'>
                            <th className='border border-gray-300 px-4 py-2'>Image</th>
                            <th className='border border-gray-300 px-4 py-2'>Name</th>
                            <th className='border border-gray-300 px-4 py-2'>Price</th>
                            <th className='border border-gray-300 px-4 py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item._id} className='hover:bg-gray-100'>
                                <td className='border border-gray-300 px-4 py-2'>
                                    <img src={item.image} alt={item.name} className='w-16 h-16 object-cover' />
                                </td>
                                <td className='border border-gray-300 px-4 py-2'>{item.name}</td>
                                <td className='border border-gray-300 px-4 py-2'>${item.price.toFixed(2)}</td>
                                <td className='border border-gray-300 px-4 py-2'>
                                    <button className='btn btn-sm btn-danger'>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartBord;
