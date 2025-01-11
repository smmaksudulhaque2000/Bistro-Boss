import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import Menu from "../page/menu/Menu";
import Order from "../page/order/Order";
import Login from "../page/auth/Login";
import SignUp from "../page/auth/SignUp";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRouter from "./PrivateRouter";
import CartBord from "../page/dashboard/CartBord";
import AllUsers from "../layout/Dashboard/AllUsers";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "cart",
          element: <CartBord></CartBord>,
        },
        {
          path: "userhome",
          element: <AllUsers></AllUsers>,
        },
      ]
  }
]);
