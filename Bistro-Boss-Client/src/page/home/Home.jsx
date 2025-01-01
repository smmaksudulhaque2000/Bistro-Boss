import React from 'react';
import Banner from './Banner';
import FoodCategory from './FoodCategory';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';
import About from './About';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <PopularMenu></PopularMenu>
            <About></About>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;