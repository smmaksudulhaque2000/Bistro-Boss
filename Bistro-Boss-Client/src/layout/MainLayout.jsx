import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../page/shared/footer/Footer';
import NavBar from '../page/shared/navbar/NavBar';

const MainLayout = () => {
    const location = useLocation();
    const noNavFoot = location.pathname.includes('login');

    return (
        <div>
            {noNavFoot || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noNavFoot || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;