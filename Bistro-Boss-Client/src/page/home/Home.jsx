import React from 'react';
import Banner from './Banner';
import FoodCategory from './FoodCategory';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';
import About from './About';
import Cart from './Cart';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <About></About>
            <Cart></Cart>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;