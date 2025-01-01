import React from 'react';
import Banner from './Banner';
import FoodCategory from './FoodCategory';
import PopularMenu from './PopularMenu';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;