import React, { useContext } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire(
              "Logged Out!",
              "You have been logged out successfully.",
              "success"
            );
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "Something went wrong. Please try again.",
              "error"
            );
            console.log(error);
          });
      }
    });
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Our Shop</Link>
      </li>
      <li>
        <Link to={"/dashboard"}>DASHBOARD</Link>
      </li>
      <li>
        <Link to={"/"}>
          <button className="btn">
          <TiShoppingCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <button onClick={handleLogout} className="btn">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <details>
              <summary>User</summary>
              <ul className="p-2 bg-black">
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/signup"}>Register</Link>
                </li>
              </ul>
            </details>
          </li>
        </>
      )}
    </>
  );

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
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-700 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link to={"/"} className="px-5">
          <a className="text-xl ">Bistro Boss</a>
          <p>Restaurant</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-20">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
