import React from 'react';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CartBord = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    const handleRemove = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            );
                        }
                    })
                    
                } catch (error) {
                    console.error('Error removing item:', error);
                }
            }
        });
    };

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
                                    <button 
                                        className='btn btn-sm btn-danger' 
                                        onClick={() => handleRemove(item._id)}
                                    >
                                        Remove
                                    </button>
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
