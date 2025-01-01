import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/shared/footer/Footer';

const MainLayout = () => {
    return (
        <div>

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;