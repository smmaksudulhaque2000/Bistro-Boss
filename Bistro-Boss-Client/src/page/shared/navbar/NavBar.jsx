import React from 'react';
import { Link } from "react-router";

const NavBar = () => {

    const navOptions = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/menu'}>Our Menu</Link></li>
    <li><Link to={'/order/salad'}>Our Shop</Link></li>
      <li>
        <details>
          <summary>CONTACT Us</summary>
          <ul className="p-2 bg-black">
            <li><a>DASHBOARD</a></li>
            <li><a>Order</a></li>
          </ul>
        </details>
      </li>
    </>
    return (
        <div className="navbar bg-slate-700 absolute z-10 opacity-40 max-w-7xl text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-slate-700 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navOptions}
      </ul>
    </div>
    <Link to={'/'} className='px-5'>
    <a className="text-xl ">Bistro Boss</a>
    <p>Restaurant</p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 z-20">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default NavBar;