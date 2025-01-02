import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import MenuItems from '../../components/MenuItems';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <div className='mb-20'>
            <SectionTitle subTitle={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {
                    popularItems.map( item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;