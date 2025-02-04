import React from 'react';
import Banner from './Banner';
import FoodCategory from './FoodCategory';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';
import About from './About';
import Cart from './Cart';
import useMenu from '../../hooks/useMenu';


const Home = () => {
    const [menu] = useMenu();
    
    const popular = menu.filter((item) => item.category === "popular");

    return (
        <div>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <About></About>
            <Cart></Cart>
            <PopularMenu items={popular} subTitle={"---Check it out---"} heading={"FROM OUR MENU"}></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;