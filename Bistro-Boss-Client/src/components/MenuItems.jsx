import React from 'react';

const MenuItems = ({item}) => {
    const {name, recipe, image, category, price} = item;

    return (
        <div className='flex justify-between items-center my-4 gap-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="Image" />
            <div>
                <h3 className="uppercase">{name}-----------</h3>
                <p>{recipe}</p>
                <p>{category}</p>
            </div>
            <p className='text-yellow-400'>${price}</p>
        </div>
    );
};

export default MenuItems;