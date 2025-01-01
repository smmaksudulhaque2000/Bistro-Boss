import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/shared/footer/Footer';
import NavBar from '../page/shared/navbar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;