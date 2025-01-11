import React from "react";
import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaHouseUser,
  FaShopify,
} from "react-icons/fa";
import { GiFallingStar } from "react-icons/gi";
import { IoMdWallet } from "react-icons/io";
import { MdContactMail, MdOutlineRestaurantMenu } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  //ToDo: get isAdmin Value from the DB
  const isAdmin = true;

  return (
    <div className="flex">
      <div className="w-1/4 min-h-screen bg-orange-300 p-5">
        <ul className="flex flex-col gap-5">
          {isAdmin ? (
            <div>
              <div className="divider"></div>
              <li>
                <NavLink className="flex items-center gap-2" to={"/"}>
                  <FaHome /> HOME
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to={"/menu"}>
                  <MdOutlineRestaurantMenu /> MENU
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/order/:category"}
                >
                  <FaShopify /> SHOP
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to={"/"}>
                  <MdContactMail /> CONTACT
                </NavLink>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/userhome"}
                >
                  <FaHouseUser /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/reservation"}
                >
                  <FaCalendarAlt /> RESERVATION
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/paymenthistory"}
                >
                  <IoMdWallet /> PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/cart"}
                >
                  <TiShoppingCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/addreview"}
                >
                  <GiFallingStar /> ADD REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/mybooking"}
                >
                  <FaCalendarCheck /> MY BOOKING
                </NavLink>
              </li>
            </div>
          )}
          <div className="divider"></div>
              <li>
                <NavLink className="flex items-center gap-2" to={"/"}>
                  <FaHome /> HOME
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to={"/menu"}>
                  <MdOutlineRestaurantMenu /> MENU
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/order/:category"}
                >
                  <FaShopify /> SHOP
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-2" to={"/"}>
                  <MdContactMail /> CONTACT
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/userhome"}
                >
                  <FaHouseUser /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/reservation"}
                >
                  <FaCalendarAlt /> RESERVATION
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/paymenthistory"}
                >
                  <IoMdWallet /> PAYMENT HISTORY
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/cart"}
                >
                  <TiShoppingCart /> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/addreview"}
                >
                  <GiFallingStar /> ADD REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center gap-2"
                  to={"/dashboard/mybooking"}
                >
                  <FaCalendarCheck /> MY BOOKING
                </NavLink>
              </li>
        </ul>
      </div>
      <div className="w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
